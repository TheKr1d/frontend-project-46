import _ from 'lodash'

const formatValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]'
  }
  else if (_.isString(value)) {
    return `'${value}'`
  }
  else {
    return String(value)
  }
}

const buildPath = (path, key) => path ? `${path}.${key}` : key

const buildNode = (element, path = '') => {
  const { type, key, value, oldValue, newValue, children } = element

  switch (type) {
    case 'added':
      return `Property '${buildPath(path, key)}' was added with value: ${formatValue(value)}`
    case 'removed':
      return `Property '${buildPath(path, key)}' was removed`
    case 'updated':
      if (children) {
        return plain(children, buildPath(path, key))
      }
      return `Property '${buildPath(path, key)}' was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`
    default:
      return ''
  }
}

const plain = (diffTree, path = '') => {
  const lines = diffTree
    .map(node => buildNode(node, path))
    .filter(Boolean)
  return lines.join('\n')
}

export default plain
