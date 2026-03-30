import path from 'path'
import yaml from 'js-yaml'

const parser = (file_data, fileName) => {
  const format = path.extname(fileName)

  switch (format) {
    case '.json':
      return JSON.parse(file_data)
    case '.yml':
      return yaml.load(file_data)
    default:
      throw new Error(`Неизвестный формат ${format}`)
  }
}

export default parser
