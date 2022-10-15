#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

const outputDir = process.cwd();

program.version('0.0.1', '-v, --vers', 'output the version number')
  .option('-o, --output [dir]', 'output dir', `${outputDir}`)
  .arguments('<url>')
  .action((link, path) => {
    // console.log(genDiff(link, path));
    console.log(link, path);
  });
program.parse(program.argv);
