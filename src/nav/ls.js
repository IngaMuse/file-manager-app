import { cwd } from "node:process";
import { readdir } from "node:fs/promises";

export const getPrintListDir = async () => {
  let currentPath = cwd();
  const files = await readdir(currentPath, { withFileTypes: true });
  const result = files
    .sort((a, b) => {
      if (a.isFile() === b.isFile()) return a.name.localeCompare(b.name);
      return a.isFile() ? 1 : -1;
    })
    .map((file) => ({
      Name: file.name,
      Type: file.isFile() ? "file" : "directory",
    }));

  console.table(result);
};
