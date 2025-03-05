#!/usr/bin/env node

import { Command } from "commander";
import * as dotenv from "dotenv";
import setupCommand from "./commands/setup";

dotenv.config();

const program = new Command();

program
  .name("pingtrack")
  .description("PingTrack - Website Monitoring CLI")
  .version("0.1.0");

// Register commands
program.addCommand(setupCommand);

program.parse(process.argv);
