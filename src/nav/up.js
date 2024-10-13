import { cwd } from "node:process";
import { sep, join, normalize } from "node:path";

export const getUpDirectory = () => {
  let currentPath = cwd();
  const arrayCurrentPath = currentPath.split(sep);
  if (arrayCurrentPath.length > 1) {
    currentPath = join(...arrayCurrentPath.slice(0, -1));
    process.chdir(currentPath);
  }
  if (arrayCurrentPath.length === 2) {
    currentPath = normalize(currentPath.replace(".", "\\"));
    process.chdir(currentPath);
  }
};
