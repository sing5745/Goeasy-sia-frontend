const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const Excel = require('exceljs');

const app = express();

var wb = new Excel.Workbook();
var path = require('path');
var filePath = path.resolve(__dirname,'64-SIA-S3927.xlsx');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');

  console.log(filePath);

  wb.xlsx.readFile(filePath).then(function(){

    var sh = wb.getWorksheet("Sheet1");

    sh.getRow(1).getCell(2).value = 32;
    wb.xlsx.writeFile("sample2.xlsx");
    console.log("Row-3 | Cell-2 - "+sh.getRow(3).getCell(2).value);

    console.log(sh.rowCount);
    //Get all the rows data [1st and 2nd column]
    for (i = 1; i <= sh.rowCount; i++) {
        console.log(sh.getRow(i).getCell(1).value);
        console.log(sh.getRow(i).getCell(2).value);
    }
  });

  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3002, () =>
  console.log('Express server is running on localhost:3002')
);