import fs from 'fs'
import csv from 'csvtojson'
import { pipeline } from 'stream'

const processLineByLine = (inputPath, outputPath) => {

  pipeline(
    csv().fromStream(
      fs.createReadStream(inputPath, 'utf-8')
    ),
    fs.createWriteStream(outputPath),
    (error) => {
      if (error) {
        console.error('Pipeline failed.', error)
      } else {
        console.log('Pipeline succeeded.')
      }
    },
  );
};

export default processLineByLine;
