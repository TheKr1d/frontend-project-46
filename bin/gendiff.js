#!/usr/bin/env node

import { program } from 'commander'
import genDiff from '../src/index.js'
import parser, { reader } from '../src/parsers.js'

const formats = ['stylish', 'plain', 'json']

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')

program
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', `output format [${formats.join(', ')}]`, 'stylish')
  .action((filepath1, filepath2) => {
    const { format } = program.opts()
    if (!formats.includes(format) && process.argv.length <= 2) {
      console.log(`Unknown format. Use option --help`)
      process.exit(1)
    }

    const parseFile1 = parser(reader(filepath1), filepath1)
    const parseFile2 = parser(reader(filepath2), filepath2)

    console.log(genDiff(parseFile1, parseFile2, format))
  })

program.parse()
