import { EOL} from "node:os";
import { stdin as input, stdout as output, exit } from "node:process";
import { createInterface } from "node:readline/promises";
import getUserName from "./utils/getUserName.js";
import { changeHomeDirectory, printCurrentWorkingDirectory } from "./utils/pathUtils.js";
import { colorText } from "./utils/colorText.js";

const runApp = async () => {
  const userName = getUserName();
  changeHomeDirectory();
  const readlineInterface = createInterface({ input, output });

  readlineInterface.write(
    colorText(`Welcome to the File Manager, ${userName + "!" + EOL}`, "green")
  );
  readlineInterface.write(
    printCurrentWorkingDirectory()
  );

  readlineInterface.on("close", () => {
    readlineInterface.write(
      colorText( `${EOL}Thank you for using File Manager, ${userName}, goodbye!${EOL}`, "green")
    );
    exit();
  });
}

await runApp();