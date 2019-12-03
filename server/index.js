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

  const {store, address, city, postal, telephone, phones, installPhone, installAndVisit} = req.body;


  var storeType = parseInt(store.charAt(0));

  var billingAddress = "";

  var storeValue = "";

  if (storeType == 3){
    storeValue = "S" + store;
    billingAddress = "EasyHome";
  }
  if(storeType == 2){
    storeValue = "B" + store;
    billingAddress = "Easyfinancial";
  }

  console.log(req.body);

  //creating excel file
  wb.xlsx.readFile(filePath).then(function(){

    var sh = wb.getWorksheet("Sheet1");

    //phones
    sh.getCell('B14').value = billingAddress;
    sh.getCell('I1').value = 'isingh' + '-' + store + '67';
		
    sh.getCell('H14').value = store;
    sh.getCell('H15').value = address;
    sh.getCell('H16').value = city;
    sh.getCell('H17').value = postal;
    sh.getCell('H17').value = telephone;

    sh.getCell('A38').value = parseInt(phones);

    //install phone
    sh.getCell('A59').value = parseInt(installPhone)
    

    //on site visit and install phone
    sh.getCell('A60').value = parseInt(installAndVisit)

    //sh.getRow(1).getCell(2).value = 32;
    wb.xlsx.writeFile("67-SIA-" + storeValue + '.xlsx');
    //console.log("Row-3 | Cell-2 - "+sh.getRow(3).getCell(2).value);

    console.log(sh.getCell('C25').value);

    
});

const file = path.resolve(__dirname,'sample2' + '.xlsx');
res.download(file); // Set disposition and send it.

});


app.get('/download', function(req, res){
  const file = path.resolve(__dirname,'67-SIA-B2530' + '.xlsx');
  res.download(file); // Set disposition and send it.
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3002')
);