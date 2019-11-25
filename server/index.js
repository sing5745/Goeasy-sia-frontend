const express = require('express');
const bodyParser = require('body-parser');
const Excel = require('exceljs');
var cors = require('cors');
const app = express();

app.use(cors());

var wb = new Excel.Workbook();
var path = require('path');
var filePath = path.resolve(__dirname,'64-SIA-S3927.xlsx');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/tracker', (req, res) => {
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

  var data = {
    "number": 75,
    "lastEntry" : "19 November 2019 8:30 AM",
    "lastEntryBy" : "isingh",
    "lastStore" : "2567",
    "lastExcelSubmitted" : "SIA-68-B2567"
  };

  res.send(JSON.stringify(data));
});

//post request working now
app.post('/api/submit', function(req, res){
  //const file = path.resolve(__dirname,req.param.fileDownload + '.xlsx');

  console.log(req.body);

  if(req.body.mitel350)
  {
    res.send(JSON.stringify(req.body.mitel350));
  }

  res.send(JSON.stringify("Not found")); // Set disposition and send it.
});

app.get('/download', function(req, res){
  const file = path.resolve(__dirname,'64-SIA-S3927' + '.xlsx');
  res.download(file); // Set disposition and send it.
});

app.listen(3002, () =>
  console.log('Express server is running on localhost:3002')
);