import fs from 'fs'
import path from 'path'

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

export { reader }
