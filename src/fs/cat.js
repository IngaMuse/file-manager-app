import { join, normalize } from "node:path";
import { cwd } from "node:process";
import { printErrorText } from "../utils/colorText.js";
import { createReadStream } from "node:fs";
import { access } from "node:fs/promises";

export const readFile = async (args) => {
  try {
    const readFilePath = normalize(join(cwd(), args[0]));
    await access(readFilePath).catch(() => {
      throw new Error();
    });
    const readableStream = createReadStream(readFilePath, "utf-8");
    let data = " ";
    readableStream.on("data", (chunk) => (data += chunk));
    readableStream.on("end", () => console.log(data));
  } catch {
    printErrorText("Operation failed. Please check that your file exists");
  }
};
