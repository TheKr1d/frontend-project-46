import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { expect, test } from '@jest/globals'
import { reader } from '../src/fileRader.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFixtureFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

const normalize = text => text.replace(/\r\n/g, '\n').trim()

test('reader (json)', () => {
  const data = normalize(reader(getFixturePath('file1.json')))
  const expected = normalize(readFixtureFile('file1Json.txt'))

  expect(data).toEqual(expected)
})

test('reader (yml)', () => {
  const data = normalize(reader(getFixturePath('file1.yml')))
  const expected = normalize(readFixtureFile('file1Yml.txt'))

  expect(data).toEqual(expected)
})

test('reader (yaml)', () => {
  const data = normalize(reader(getFixturePath('file1.yaml')))
  const expected = normalize(readFixtureFile('file1Yml.txt'))

  expect(data).toEqual(expected)
})
