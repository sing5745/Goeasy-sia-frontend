const express = require('express');
const bodyParser = require('body-parser');
const Excel = require('exceljs');
var cors = require('cors');
const app = express();
const fs = require('fs');

app.use(cors());

var wb = new Excel.Workbook();
var path = require('path');


var currentTrackingFile = path.resolve(__dirname,'current_tracker.xlsx');
var defaultFile = path.resolve(__dirname,'64-SIA-S3927.xlsx');

var currentNumber;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/api/tracker', (req, res) => {

  wb.xlsx.readFile(currentTrackingFile).then(function(){

    var sh = wb.getWorksheet("Sheet1");

    currentNumber = sh.getCell('B3').value;

    console.log(sh.getCell('B3').value);
    var data = {
      "number": currentNumber
    };
  
    console.log(data);
    res.send(JSON.stringify(data));
    
});

  
});

//post request working now
app.post('/api/submit', function(req, res){

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
  wb.xlsx.readFile(defaultFile).then(function(){

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
    wb.xlsx.writeFile((currentNumber + 1) + "-SIA-" + storeValue + '.xlsx');
    
});

incrementTracker();


const file = path.resolve(__dirname,(currentNumber + 1) + "-SIA-" + storeValue + '.xlsx');
console.log(file);
res.send(file.toString()); // Set disposition and send it.

});


app.get('/download', function(req, res){
  const file = path.resolve(__dirname,'64-SIA-S3927' + '.xlsx');

  // const deleteFile = path.resolve(__dirname,'sample2' + '.xlsx');
  // fs.unlink(deleteFile, (err) => {
  //   if (err) {
  //     console.log("File doesn't exist");
  //   } 
    
  // });
  incrementTracker();
  //res.finished()
  res.download(file); // Set disposition and send it.

});

function incrementTracker(){
  console.log("incrementing counter");
  var wb = new Excel.Workbook();
  wb.xlsx.readFile(currentTrackingFile).then(function(){

    var sh = wb.getWorksheet("Sheet1");

    currentNumber = sh.getCell('B3').value;

    sh.getCell('B3').value = parseInt(currentNumber) + 1;
  
    wb.xlsx.writeFile(currentTrackingFile);

});
}


app.listen(3001, () =>
 {
   wb.xlsx.readFile(currentTrackingFile).then(function(){

    var sh = wb.getWorksheet("Sheet1");

    currentNumber = sh.getCell('B3').value;
  
  });
  console.log('Express server is running on localhost:3002');
  
 }
  
);