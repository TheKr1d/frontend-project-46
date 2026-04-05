import stylish from './stylish.js'
import buildDiffTree from './buildDiffTree.js'

const genDiff = (obj1, obj2, format) => {
  const diffTree = buildDiffTree(obj1, obj2)

  switch (format) {
    case 'stylish':
      return stylish(diffTree)
    default:
      throw new Error (`${format} - Текущего формата не предусмотрено.\nИспользуй доступные форматы - ['stylish']`)
  }
}

export default genDiff
