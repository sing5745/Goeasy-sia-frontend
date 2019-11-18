export function updateFields(ticket, data, value) {
    
    if(value.length === 4){
        for (var i = 0; i < data.length; i++){
          
            if (data[i].Branch === value){
               
               ticket["telephone"] = data[i].Phone;
               ticket["address"] = data[i].Address + ' ' + data[i].Address2;
               ticket["city"] = data[i].City;
               ticket["postal"] = data[i]["Postal Code"];

            }

          }
    
  
  }else{
    ticket["telephone"] = '';
    ticket["address"] = '';
    ticket["city"] = '';
    ticket["postal"] = '';
    
  }
}