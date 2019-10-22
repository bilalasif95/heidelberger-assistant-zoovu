const csv = require('csv-parser');
const fs = require('fs');

let answersAttrs= {};

fs.createReadStream('data.csv')
  .pipe(csv({
      separator: ';',
  }))
  .on('data', (rowOfData) => {
    const answer = {
        hexCode: rowOfData['Hexcode'],
        colorType: rowOfData['Color Type'],
        text: rowOfData['Color Code'],
        hexMapping: rowOfData['Hex Mapping'],
        name: rowOfData['name'],
        hasInfoText: false,
        selected: false,
    };
    answersAttrs[rowOfData["Hex Mapping"]] = answer;
  })
  .on('end', () => {
      const finalString = `customQuestionType: "colorPicker"\nanswersMapping: "${JSON.stringify(answersAttrs).replace(/\"/g, `\\"`)}"`;
      fs.writeFile('questionMappingAttribute.txt', finalString, 'utf8', () => {
          console.log('csv locked and loaded', answersAttrs)
      });
  });