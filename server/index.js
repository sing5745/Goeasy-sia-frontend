const express = require('express');
const bodyParser = require('body-parser');
const Excel = require('exceljs');

var path = require("path");

var cors = require('cors');
const app = express();
const fs = require('fs');

app.use(cors());

var wb = new Excel.Workbook();
var path = require('path');


var currentTrackingFile = path.resolve(__dirname,'current_tracker.xlsx');
var defaultFile = path.resolve(__dirname,'default.xlsx');

var currentNumber;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//returns the tracking number from excel
app.get('/api/tracker', (req, res) => {

  wb.xlsx.readFile(currentTrackingFile).then(function(){

    var sh = wb.getWorksheet("Sheet1");

    currentNumber = sh.getCell('B3').value;

    console.log(sh.getCell('B3').value);
    var data = {
      "number": currentNumber
    };

    res.send(JSON.stringify(data));
    
});

  
});

var fileName = "";

app.post('/api/submit', function(req, res){

  const {store, 
        address, 
        city, 
        postal, 
        telephone,
        phones, 
        installPhone,
        userName,
        userEmail,
        installAndVisit} = req.body;


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

  //creating excel file
  wb.xlsx.readFile(defaultFile).then(function(){

    var sh = wb.getWorksheet("Sheet1");

    sh.getCell('B14').value = billingAddress;

    //changing username
    sh.getCell('I1').value = userName + '-' + store + "-" + (currentNumber + 1).toString();
		
    sh.getCell('H14').value = store;
    sh.getCell('H15').value = address;
    sh.getCell('H16').value = city;
    sh.getCell('H17').value = postal;
    sh.getCell('H17').value = telephone;

    sh.getCell('D70').value = getDateAndYear()[0];
    sh.getCell('H70').value = getDateAndYear()[1];
    sh.getCell('J70').value = getDateAndYear()[2];

    if(phones !== null){
      sh.getCell('A38').value = parseInt(phones);
    }
    

    //install phone
    if(installPhone !== null){
      sh.getCell('A59').value = parseInt(installPhone);
    }
    

    //on site visit and install phone
    if(installAndVisit !== null){
      sh.getCell('A60').value = parseInt(installAndVisit);
    }
    
    //creating the new excel
    wb.xlsx.writeFile((currentNumber + 1) + "-SIA-" + storeValue + '.xlsx');
    
});

console.log(currentNumber);

fileName = (currentNumber + 1) + "-SIA-" + storeValue + '.xlsx';

incrementTracker();

insertRecord((currentNumber + 1), userName, getDateAndYear()[0] + " " + getDateAndYear()[1] + " " + getDateAndYear()[2] + " " + storeValue);


res.send({file: fileName}); 

});

//get request to download file
app.get('/download/:fileName', function(req, res){

  res.download(path.resolve(__dirname,req.params.fileName)); 

});

app.get('/api/get-excel-data', async function(req, res){

  let data = await getDataForUsers();
  res.send(data); 

});



async function incrementTracker(){
  console.log("incrementing counter");
  var wb = new Excel.Workbook();

  await wb.xlsx.readFile(currentTrackingFile).then(function(){

    var sh = wb.getWorksheet("Sheet1");

    currentNumber = sh.getCell('B3').value;

    sh.getCell('B3').value = parseInt(currentNumber) + 1;
  
    wb.xlsx.writeFile(currentTrackingFile);

    
    
});
}

function getDateAndYear(){
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  //returns date/month/array

  return [dd, monthNames[today.getMonth()], yyyy];
}

async function getDataForUsers(){
  const newWorkbook = new Excel.Workbook();
  await newWorkbook.xlsx.readFile('export2_new.xlsx');
  const newworksheet = newWorkbook.getWorksheet('My Sheet');
  var data = [];
  await newworksheet.eachRow(function(row, rowNumber) {
    data.push(row.values);
    
  });
  //removing header of excel from array
  data.shift();
  data.reverse();
  

  return JSON.stringify(data);
}

async function insertRecord(tracker, username, date){
  const newWorkbook = new Excel.Workbook();
  await newWorkbook.xlsx.readFile('export2_new.xlsx');
  
  const newworksheet = newWorkbook.getWorksheet('My Sheet');
  newworksheet.columns = [
   {header: 'Id', key: 'id'},
   {header: 'Name', key: 'name'}, 
   {header: 'D.O.B.', key: 'dob'}
  ];

  var data = [];
  await newworksheet.eachRow(function(row, rowNumber) {
    data.push(row.values);
  });
  console.log(JSON.stringify(data));

  await newworksheet.addRow({id: tracker, name: username, dob: date});



  await newWorkbook.xlsx.writeFile('export2_new.xlsx');

  console.log("File is written");

};

app.listen(3001, () =>
 {
  
  console.log('Express server is running on localhost:3002');
  
 }
  
);