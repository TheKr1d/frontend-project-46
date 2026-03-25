import { reader } from './fileRader.js'

const genDiff = (file1, file2, option) => {
  const parseFile1 = JSON.parse(reader(file1))
  const parseFile2 = JSON.parse(reader(file2))
  return [parseFile1, parseFile2, option]
}

export default genDiff
