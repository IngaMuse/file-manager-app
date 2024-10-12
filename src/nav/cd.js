import { join, normalize } from "node:path";
import { cwd } from "node:process"
import { printErrorText } from "../utils/colorText.js";

export const getChangeDirectory = (args) => {
  try {
    const changeDirectory = join(cwd(), args[0]);
    const changeDirectoryPath = normalize(changeDirectory);
    process.chdir(changeDirectoryPath);
  } catch {
    printErrorText("Operation failed. Please check your path")
  }
}