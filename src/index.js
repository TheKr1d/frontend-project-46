import stylish from './stylish.js'

const genDiff = (file1, file2, format) => {
  switch (format) {
    case 'stylish':
      return stylish(file1, file2)
    default:
      throw new Error (`${format} - Текущего формата не предусмотрено.\nИспользуй доступные форматы - ['stylish']`)
  }
}

export default genDiff
