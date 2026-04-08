#!/usr/bin/env node

import { Command } from 'commander'
import genDiff from '../src/index.js'

const formats = ['stylish', 'plain', 'json']

const program = new Command()

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')

program
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')
  .option('-f, --format [type]', `output format [${formats.join(', ')}]`, 'stylish')
  .action((filepath1, filepath2, options) => {
    console.log(genDiff(filepath1, filepath2, options.format))
  })

program.parse(process.argv)
