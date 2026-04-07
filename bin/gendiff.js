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
  .action((filepath1, filepath2, options) => {
    const format = options.format
    if (!formats.includes(format)) {
      console.log(`Unknown format: ${format}. Use option --help`)
      process.exit(1)
    }

    try {
      const parseFile1 = parser(reader(filepath1), filepath1)
      const parseFile2 = parser(reader(filepath2), filepath2)
      console.log(genDiff(parseFile1, parseFile2, format))
    }
    catch (error) {
      console.error('Ошибка парсинга файлов:', error.message)
      process.exit(1)
    }
  })

if (process.argv.length < 3) {
  if (process.argv.length === 2) {
    program.help()
  }
}

program.parse()
