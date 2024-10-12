import { printErrorText } from "./utils/colorText.js";
import { EOL } from "node:os";
import { getUpDirectory } from "./nav/up.js";
import { getChangeDirectory } from "./nav/cd.js";
import { getPrintListDir } from "./nav/ls.js";
import { readFile } from "./fs/cat.js";
import { createFile } from "./fs/add.js";
import { renameFile } from "./fs/rn.js";
import { copyFile } from "./fs/cp.js";
import { moveFile } from "./fs/mv.js";
import { removeFile } from "./fs/rm.js";
import { handlerOSInput } from "./os/os.js";

export const handlerUserInput = async (userInput, closeReadLine) => {
  const [operationType, ...args] = userInput.trim().split(/\s+/g)
  switch (operationType) {
      
    case "up":
      if (args.length !== 0) {
        printErrorText("Invalid input up command" + EOL)
      } else {
        getUpDirectory();
      }
      break;

    case "cd":
      if (args.length !== 1) {
        printErrorText("Invalid input change dir command" + EOL)
      } else {
        getChangeDirectory(args);
      }
      break;

    case "ls":
      if (args.length !== 0) {
        printErrorText("Invalid input print command" + EOL)
      } else {
        await getPrintListDir();
      }
      break;

    case "cat":
      if (args.length !== 1) {
        printErrorText("Invalid input read command" + EOL)
      } else {
        readFile(args);
      }
      break;

    case "add":
      if (args.length !== 1) {
        printErrorText("Invalid input create command" + EOL)
      } else {
        await createFile(args);
      }
      break;

    case "rn":
      if (args.length !== 2) {
        printErrorText("Invalid input rename command" + EOL)
      } else {
        await renameFile(args);
      }
      break;

    case "cp":
      if (args.length !== 2) {
        printErrorText("Invalid input copy command" + EOL)
      } else {
        await copyFile(args);
      }
      break;

    case "mv":
      if (args.length !== 2) {
        printErrorText("Invalid input move command" + EOL)
      } else {
        await moveFile(args);
      }
      break;

    case "rm":
      if (args.length !== 1) {
        printErrorText("Invalid input remove command" + EOL)
      } else {
        await removeFile(args);
      }
      break;

      case "os":
        if (args.length !== 1) {
          printErrorText("Invalid input os command" + EOL)
        } else {
          handlerOSInput(args);
        }
          break

    case "hash":
      if (args.length !== 1) {
        printErrorText("Invalid input hash command" + EOL)
      } else {
      }
      break;

    case "compress":
      if (args.length !== 2) {
        printErrorText("Invalid input compress command" + EOL)
      } else {
      }
      break;

    case "decompress":
      if (args.length !== 2) {
        printErrorText("Invalid input decompress command" + EOL)
      } else {
      }
      break;

      case ".exit":
        closeReadLine()
        break
      default:
        printErrorText("Invalid input" + EOL)
        break
    }
}