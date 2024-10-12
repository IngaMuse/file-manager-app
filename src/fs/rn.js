import { sep, join } from "node:path";
import { cwd } from "node:process";
import { printErrorText } from "../utils/colorText.js";
import { rename } from "node:fs/promises";

export const renameFile = async (args) => {
  try {
    const fileToRenamePath = join(cwd(), args[0]);
    const directoryToRenamePath = join(
      ...fileToRenamePath.split(sep).slice(0, -1)
    );
    const newFileNamePath = join(directoryToRenamePath, args[1]);
    await rename(fileToRenamePath, newFileNamePath);
  } catch {
    printErrorText(
      "Operation failed. Please check that your file to rename exists."
    );
  }
};
