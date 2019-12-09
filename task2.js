
import processLineByLine from './processLineByLine'
import { resolve } from 'path'

const inputPath = resolve('input.csv')
const outputPath = resolve('output.txt')

processLineByLine(inputPath, outputPath)
