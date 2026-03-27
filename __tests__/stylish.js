import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { expect, test } from '@jest/globals'
import parser from '../src/parser.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import genDiff from '../src/index.js'

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFixtureFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

const normalize = text => text.replace(/\r\n/g, '\n').trim()

test('genDiff - stylish', () => {
  const obj1 = parser(readFixtureFile('file1.json'))
  const obj2 = parser(readFixtureFile('file2.json'))
  const expected = normalize(readFixtureFile('stylish.txt'))
  const actual = normalize(genDiff(obj1, obj2, 'stylish'))

  expect(actual).toEqual(expected)
})
