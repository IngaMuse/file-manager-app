import { join } from "node:path";
import { cwd } from "node:process";
import { printErrorText } from "../utils/colorText.js";
import { access, writeFile } from "node:fs/promises";

export const createFile = async (args) => {
  const createFilePath = join(cwd(), args[0]);
  await access(createFilePath).then(
    () => {
      printErrorText("Operation failed. Please check name your file");
    },
    async () => await writeFile(createFilePath, "")
  );
};
