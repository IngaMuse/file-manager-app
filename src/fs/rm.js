import { join } from "node:path";
import { cwd } from "node:process";
import { printErrorText } from "../utils/colorText.js";
import { rm } from "node:fs/promises";

export const removeFile = async (args) => {
  try {
    const fileToRemovePath = join(cwd(), args[0]);
    await rm(fileToRemovePath);
  } catch {
    printErrorText(
      "Operation failed. Please check that your file to remove exists."
    );
  }
};
