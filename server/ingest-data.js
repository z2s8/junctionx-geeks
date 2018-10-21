const fs = require('fs');

function parseTwJsonBad(filename) {
  let transactions = {}

  let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(filename)
  });

  lineReader.on('line', function (line) {
    console.log('Line from file:', line);
    parsedLine = JSON.parse(line.replace('[', '').replace(']', '').substring(0, line.length - 2) + "}")
    if (!transactions[line.submit_time]) {
      transactions[line.submit_time] = []
    }
    transactions[line.submit_time].push(parsedLine)
  });

  lineReader.on('end', () => console.log(transactions));
}

function parseTwJson(filename) {
  var data = '';

  var readStream = fs.createReadStream(filename, 'utf8');

  readStream.on('data', function(chunk) {  
      data += chunk;
  }).on('end', function() {
      parsedLines = JSON.parse(data);
      let transactions = {}
      for (let i = 0; i < parsedLines.length; i++) {
        parsedLine = parsedLines[i]
        if (!transactions[parsedLine]) {
          transactions[parsedLine.submit_time] = []
        }
        transactions[parsedLine.submit_time].push(parsedLine)
      }
      // console.log('we got', transactions)
      return transactions

  });
}

console.log(parseTwJson('server/data/transfers.json'))
