import _ from 'lodash'

const getPass = (depth, type) => {
  const typeValues = {
    added: '+ ',
    removed: '- ',
    unchanged: '  ',
  }
  const indent = '  '
  return indent.repeat(depth) + typeValues[type]
}

const buildNode = (element, depth) => {
  const { type, key, value, oldValue, newValue, children } = element
  const prefix = getPass(depth, type === 'updated' ? 'unchanged' : type)

  switch (type) {
    case 'added':
      return `${prefix}${key}: ${formatValue(value, depth + 2)}`
    case 'removed':
      return `${prefix}${key}: ${formatValue(value, depth + 2)}`
    case 'unchanged':
      return `${prefix}${key}: ${formatValue(value, depth + 2)}`
    case 'updated':
      if (children) {
        return `${prefix}${key}: ${formatObj(children, depth + 2)}`
      }

      return `${getPass(depth, 'removed')}${key}: ${formatValue(oldValue, depth + 2)}\n${getPass(depth, 'added')}${key}: ${formatValue(newValue, depth + 2)}`
    default:
      return ''
  }
}

const formatValue = (value, depth) => _.isObject(value)
  ? formatObj(value, depth)
  : String(value)

const formatObj = (objOrChildren, depth) => {
  if (!Array.isArray(objOrChildren)) {
    const lines = Object.entries(objOrChildren).map(([k, v]) =>
      `${getPass(depth, 'unchanged')}${k}: ${formatValue(v, depth + 2)}`,
    )
    const bracketIndent = ' '.repeat(depth * 2 - 2)
    return ['{', ...lines, `${bracketIndent}}`].join('\n')
  }
  const lines = objOrChildren.map(child => buildNode(child, depth))
  const bracketIndent = ' '.repeat((depth * 2) - 2)
  return ['{', ...lines, `${bracketIndent}}`].join('\n')
}

const stylish = (diffTree) => {
  const lines = diffTree.map(node => buildNode(node, 1))
  return `{\n${lines.join('\n')}\n}`
}

export default stylish
