import { EOL, cpus, homedir, userInfo, arch } from "node:os";
import { printErrorText } from "../utils/colorText.js";

export const handlerOSInput = (args) => {
  switch (args[0]) {
    case "--EOL":
      console.log(JSON.stringify(EOL));
      break;
    case "--cpus":
      const cpusData = cpus().map((cpu) => ({
        model: cpu.model,
        speed: `${(cpu.speed / 1000).toFixed(2)} GHz`,
      }));
      console.log("Amount CPUs: " + cpus().length);
      console.log(cpusData);
      break;
    case "--homedir":
      console.log(homedir());
      break;
    case "--username":
      console.log(userInfo().username);
      break;
    case "--architecture":
      console.log(arch());
      break;
    default:
      printErrorText("Invalid input os command" + EOL);
      break;
  }
};
