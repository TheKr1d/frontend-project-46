import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { expect, test } from '@jest/globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import genDiff from '../src/index.js'

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFixtureFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

const normalize = text => text.replace(/\r\n/g, '\n').trim()

const fileNameJson1 = 'file1.json'
const fileNameJson2 = 'file2.json'

test('genDiff - stylish (json)', () => {
  const expected = normalize(readFixtureFile('plain.txt'))
  const actual = genDiff(getFixturePath(fileNameJson1), getFixturePath(fileNameJson2), 'plain')

  expect(actual).toEqual(expected)
})

const fileNameYml1 = 'file1.yml'
const fileNameYml2 = 'file2.yml'

test('genDiff - stylish (yml)', () => {
  const expected = normalize(readFixtureFile('plain.txt'))

  const actual = genDiff(getFixturePath(fileNameYml1), getFixturePath(fileNameYml2), 'plain')

  expect(actual).toEqual(expected)
})

test('genDiff - stylish (yml and json)', () => {
  const expected = normalize(readFixtureFile('plain.txt'))
  const actual = genDiff(getFixturePath(fileNameYml1), getFixturePath(fileNameJson2), 'plain')

  expect(actual).toEqual(expected)
})
