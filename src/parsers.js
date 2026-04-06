import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const parser = (file_data, fileName) => {
  const format = path.extname(fileName).toLocaleLowerCase()

  switch (format) {
    case '.json':
      return JSON.parse(file_data)
    case '.yml':
      return yaml.load(file_data)
    case '.yaml':
      return yaml.load(file_data)
    default:
      throw new Error(`Неизвестный формат ${format}`)
  }
}

const reader = (fileName) => {
  try {
    const thisDirectory = process.cwd()
    const fullFilePath = path.resolve(thisDirectory, fileName)
    return fs.readFileSync(fullFilePath, 'utf-8')
  }
  catch (err) {
    throw new Error(`Не удалось прочитать файл ${fileName}`, { cause: err })
  }
}

export default parser
export { reader }
