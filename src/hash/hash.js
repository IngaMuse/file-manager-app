import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { cwd } from "node:process";
import { printErrorText } from "../utils/colorText.js";
import { access } from "node:fs/promises";

export const calculateHash = async (args) => {
  try {
    const srcPath = join(cwd(), args[0]);
    await access(srcPath).catch(() => {
      throw new Error();
    });
    const hash = createHash("sha256").setEncoding("hex");

    createReadStream(srcPath)
      .pipe(hash)
      .on("finish", function () {
        console.log(`Hash of file is calculated: ${hash.read()}.`);
      });
  } catch {
    printErrorText("Operation failed. Please check that your file exists");
  }
};
