#!/usr/bin/env node

import { Command } from 'commander'
import genDiff from '../src/index.js'
import parser, { reader } from '../src/parsers.js'

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
    const format = options.format
    const parseFile1 = parser(reader(filepath1), filepath1)
    const parseFile2 = parser(reader(filepath2), filepath2)

    console.log(genDiff(parseFile1, parseFile2, format))
  })

program.parse(process.argv)
