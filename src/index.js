import formatter from './formatters/index.js'
import buildDiffTree from './buildDiffTree.js'
import parser, { reader } from './parsers.js'

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const parseFile1 = parser(reader(filepath1), filepath1)
  const parseFile2 = parser(reader(filepath2), filepath2)
  const diffTree = buildDiffTree(parseFile1, parseFile2)
  return formatter(diffTree, format)
}

export default genDiff
