import { sep, join } from "node:path";
import { cwd } from "node:process";
import { printErrorText } from "../utils/colorText.js";
import { writeFile } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";

export const moveFile = async (args) => {
  try {
    const srcPath = join(cwd(), args[0]);
    const directorySrcPath = join(...srcPath.split(sep).slice(0, -1));
    const destPath = join(directorySrcPath, args[1]);

    await writeFile(destPath, "");

    const readableStream = createReadStream(srcPath, "utf-8");
    const writableStream = createWriteStream(destPath, "utf-8");

    readableStream.pipe(writableStream);
    await rm(srcPath);
  } catch {
    printErrorText(
      "Operation failed. Please check that your move file or new directory exists."
    );
  }
};
