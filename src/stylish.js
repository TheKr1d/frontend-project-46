import _ from 'lodash'

const stylish = (data1, data2) => {
  const pass = '  '
  const uniqueKeys = _.union(Object.keys(data1), Object.keys(data2))
  const sortKeys = uniqueKeys.sort()
  let resultStr = ''

  for (const key of sortKeys) {
    if (!Object.hasOwn(data1, key)) {
      resultStr += `${pass}+ ${key}: ${data2[key]}\n`
    }
    else if (!Object.hasOwn(data2, key)) {
      resultStr += `${pass}- ${key}: ${data1[key]}\n`
    }
    else if (data1[key] !== data2[key]) {
      resultStr += `${pass}- ${key}: ${data1[key]}\n`
      resultStr += `${pass}+ ${key}: ${data2[key]}\n`
    }
    else {
      resultStr += `${pass}  ${key}: ${data1[key]}\n`
    }
  }

  return `{\n${resultStr}}`
}

export default stylish
