import { sep, join } from "node:path";
import { cwd } from "node:process";
import { printErrorText } from "../utils/colorText.js";
import { writeFile } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliDecompress } from "zlib";
import { pipeline } from "stream/promises";

export const decompressFile = async (args) => {
  try {
    const srcPath = join(cwd(), args[0]);
    const nameCompressFile = join(...srcPath.split(sep).slice(-1));
    const destPath = join(cwd(), args[1], nameCompressFile.split(".gz")[0]);

    await writeFile(destPath, "");

    const readableStream = createReadStream(srcPath);
    const writableStream = createWriteStream(destPath);

    pipeline(readableStream, createBrotliDecompress(), writableStream);
  } catch {
    printErrorText(
      "Operation failed. Please check that your decompress file or destination directory exists."
    );
  }
};
