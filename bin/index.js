#!/usr/bin/env node
import { Command } from 'commander';
import getLoadUrl from '../src/index.js';

const program = new Command();

const outputDir = process.cwd();

program.version('0.0.1', '-v, --vers', 'output the version number')
  .option('-o, --output [dir]', 'output dir', `${outputDir}`)
  .arguments('<url>')
  .action((link, path) => {
    // console.log(genDiff(link, path));
    console.log(getLoadUrl(link, path));
  });
program.parse(program.argv);
