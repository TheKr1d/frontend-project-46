import formatter from './formatters/index.js'
import buildDiffTree from './buildDiffTree.js'

const genDiff = (obj1, obj2, format) => {
  const diffTree = buildDiffTree(obj1, obj2)
  return formatter(diffTree, format)
}

export default genDiff
