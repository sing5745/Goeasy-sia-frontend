const express = require('express');
const bodyParser = require('body-parser');
const Excel = require('exceljs');

const app = express();

var wb = new Excel.Workbook();
var path = require('path');
var filePath = path.resolve(__dirname,'64-SIA-S3927.xlsx');

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');

  console.log(filePath);

  wb.xlsx.readFile(filePath).then(function(){

    var sh = wb.getWorksheet("Sheet1");

    //sh.getRow(1).getCell(2).value = 32;
    wb.xlsx.writeFile("sample2.xlsx");
    //console.log("Row-3 | Cell-2 - "+sh.getRow(3).getCell(2).value);

    console.log(sh.getCell('C25').value);

    
  });

  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/download', function(req, res){
  const file = path.resolve(__dirname,'64-SIA-S3927.xlsx');
  res.download(file); // Set disposition and send it.
});

app.listen(3002, () =>
  console.log('Express server is running on localhost:3002')
);