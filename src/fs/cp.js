import { sep, join } from "node:path";
import { cwd } from "node:process";
import { printErrorText } from "../utils/colorText.js";
import { writeFile } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";

export const copyFile = async (args) => {
  try {
    const srcPath = join(cwd(), args[0]);
    const nameCopyFile = join(...srcPath.split(sep).slice(-1));
    const destPath = join(cwd(), args[1], nameCopyFile);

    await writeFile(destPath, "");

    const readableStream = createReadStream(srcPath, "utf-8");
    const writableStream = createWriteStream(destPath, "utf-8");

    readableStream.pipe(writableStream);
  } catch {
    printErrorText(
      "Operation failed. Please check that your copy file or new directory exists."
    );
  }
};
