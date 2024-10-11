import { argv } from "node:process";
import { InvalidUserNameError } from "./customError.js";

export default  () => {
  const userNameArg = argv
    .slice(2)
    .filter((arg) => arg.startsWith("--username="));
  const userName = userNameArg.length > 0 ? userNameArg[0].split("=")[1] : null;
  try {
    if (!userName) {
      throw new InvalidUserNameError();
    }
    return userName;
  } catch {
    throw new InvalidUserNameError();
  }
};