import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { cwd } from "node:process";
import { printErrorText } from "../utils/colorText.js";

export const calculateHash = async (args) => {
  try {
    const srcPath = join(cwd(), args[0]);
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
