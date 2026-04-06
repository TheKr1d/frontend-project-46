import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { expect, test } from '@jest/globals'
import parser from '../src/parsers.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import genDiff from '../src/index.js'

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFixtureFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

const normalize = text => text.replace(/\r\n/g, '\n').trim()

const fileNameJson1 = 'file1.json'
const fileNameJson2 = 'file2.json'

test('genDiff - stylish (json)', () => {
  const obj1 = parser(readFixtureFile(fileNameJson1), fileNameJson1)
  const obj2 = parser(readFixtureFile(fileNameJson2), fileNameJson2)
  const expected = normalize(readFixtureFile('plain.txt'))
  const actual = normalize(genDiff(obj1, obj2, 'plain'))

  expect(actual).toEqual(expected)
})

const fileNameYml1 = 'file1.yml'
const fileNameYml2 = 'file2.yml'

test('genDiff - stylish (yml)', () => {
  const obj1 = parser(readFixtureFile(fileNameYml1), fileNameYml1)
  const obj2 = parser(readFixtureFile(fileNameYml2), fileNameYml2)
  const expected = normalize(readFixtureFile('plain.txt'))
  const actual = normalize(genDiff(obj1, obj2, 'plain'))

  expect(actual).toEqual(expected)
})

test('genDiff - stylish (yml and json)', () => {
  const obj1 = parser(readFixtureFile(fileNameYml1), fileNameYml1)
  const obj2 = parser(readFixtureFile(fileNameJson2), fileNameJson2)
  const expected = normalize(readFixtureFile('plain.txt'))
  const actual = normalize(genDiff(obj1, obj2, 'plain'))

  expect(actual).toEqual(expected)
})
