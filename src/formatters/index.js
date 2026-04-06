import stylish from './stylish.js'
import plain from './plain.js'

const formatter = (diffTree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(diffTree)
    case 'plain':
      return plain(diffTree)
    case 'json':
      return JSON.stringify(diffTree, null, ' ')
    default:
      throw new Error (`${format} - unknown format.`)
  }
}

export default formatter
