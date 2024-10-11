import { colorText } from "./colorText.js";
import { EOL} from "node:os";

export class InvalidUserNameError extends Error {
  constructor() {
    super(colorText(`${EOL}Invalid username.${EOL}Please start File Manager with command: "npm run start -- --username=your_username"${EOL}`, "red"));
    this.name = "InvalidUserNameError";
  }
}