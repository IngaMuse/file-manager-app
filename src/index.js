import { EOL } from "node:os";
import { stdin as input, stdout as output, exit } from "node:process";
import { createInterface } from "node:readline/promises";
import getUserName from "./utils/getUserName.js";
import {
  changeHomeDirectory,
  printCurrentWorkingDirectory,
  printGreeting,
} from "./utils/pathUtils.js";
import { colorText } from "./utils/colorText.js";
import { handlerUserInput } from "./handlerUserInput.js";

const runApp = () => {
  const userName = getUserName();
  changeHomeDirectory();
  const readlineInterface = createInterface({ input, output });
  printGreeting(userName);
  printCurrentWorkingDirectory();

  const closeReadLine = () => {
    readlineInterface.close();
  };

  readlineInterface.on("close", () => {
    console.log(
      colorText(
        `${EOL}Thank you for using File Manager, ${userName}, goodbye!${EOL}`,
        "green"
      )
    );
    exit();
  });

  readlineInterface.on("line", async (userInput) => {
    await handlerUserInput(userInput, closeReadLine);
    printCurrentWorkingDirectory();
  });
};

runApp();
