import { Command } from "commander";
import inquirer from "inquirer";
import { saveConfig, isConfigured, loadConfig } from "../utils/config";

const setupCommand = new Command("setup")
  .description("Configure PingTrack settings")
  .action(async () => {
    if (isConfigured()) {
      console.log("PingTrack is already configured. Reconfiguring...");
    }

    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "mode",
        message: "Do you want to use cloud monitoring (AWS) or local execution?",
        choices: ["cloud", "local"],
      },
    ]);

    let config: any = { mode: answers.mode };

    if (answers.mode === "cloud") {
      const awsCredentials = await inquirer.prompt([
        { type: "input", name: "accessKeyId", message: "Enter AWS Access Key ID:" },
        { type: "password", name: "secretAccessKey", message: "Enter AWS Secret Access Key:" },
        { type: "input", name: "region", message: "Enter AWS Region (e.g., us-east-1):" },
      ]);
      config.aws = awsCredentials;
    }

    saveConfig(config);
    console.log("✅ PingTrack setup completed!");
  });

export default setupCommand;
