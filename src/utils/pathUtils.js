import { cwd } from 'node:process'
import { colorText } from './colorText.js'
import { EOL, homedir } from "node:os";

export const printCurrentWorkingDirectory = () => {
  console.log(colorText(`You are currently in ${cwd() + EOL}`, 'green'))
}

export const changeHomeDirectory = () => {
  const homeDirectory = homedir();
  process.chdir(homeDirectory);
}