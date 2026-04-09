#!/usr/bin/env node

import { Command } from 'commander'
import genDiff from '../src/index.js'

const program = new Command()

const formats = ['stylish', 'plain', 'json']

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('filePath1', 'path to first file')
  .argument('filePath2', 'path to second file')
  .option('-f, --format [type]', `output format [${formats.join(', ')}]`, 'stylish')
  .action((filePath1, filePath2, options) => { console.log(genDiff(filePath1, filePath2, options.format)) })

program.parse(process.argv)
