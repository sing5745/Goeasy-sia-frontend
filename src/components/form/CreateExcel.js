import React from 'react';
import {updateFields} from '../../helpers';
import { Button, Icon, TextInput, Autocomplete, Select} from 'react-materialize';
var data = require('../../data/data.json');

export default class CreateExcel extends React.Component
{

    state = {
        ticket : {
            store: "", 
            telephone: "", 
            address: "", 
            city: "", 
            postal: "",

        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const id = target.id;

        //console.log(target, value, name);

         let ticket = {...this.state.ticket};


         ticket[id] = value;

        // //only calling this method when changing location input
        if (id === 'store'){
            updateFields(ticket, data, value); 
        }
        
        console.log(id, ticket);

         this.setState({ticket:ticket});
        
         

         console.log(ticket);
      };

      handleSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.ticket);
        console.log('Submitting form');

        console.log(this.state.ticket);
        

        this.submitForm(this.state.ticket);

    
      }

      async submitForm(ticket){
        await fetch('http://192.168.0.27:8080/submit', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'mode': 'no cors'
            },
            body: JSON.stringify(ticket),
          }).then(response => response.json().then(data => console.log(data)));
      }  

    render(){
        
        return (
            <>
                <div className="container">
                    <div>
                        <h1 className="center-align">Excel Edit</h1>
                    </div>
                        <div className="row">
                                <form className="col s12 center-align" onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <h6 className="center-align">Billing Address</h6>
                                    <div className="input-field col s12 center-align">
                                            <select className="browser-default">
                                                <option value="">Choose Name</option>
                                                <option value="1">Easyfinancial</option>
                                                <option value="2">Easyhome</option>
                                                <option value="Ho">Head Office</option>
                                            </select>
                                    </div>
                                   
                                </div>
                                    {/* <!-- Installation address --> */}
                                    <div className="row">
                                            <h6 className="center-align">Installation Address</h6>
                                            
                                            <div className="input-field col s4">
                                                 <TextInput id="store" onChange={this.handleChange} className="validate" icon="home" label="Store" /> 
                                                {/* <Autocomplete id="store" label="Store" options={{data: {"2530": null,"2532": null,"2554": 'https://placehold.it/250x250'}}} onAutocomplete={this.handleChange}  /> */}
                                            </div>
                                            <div className="input-field col s4">
                                                    <TextInput id="telephone" className="validate" icon="phone" value={this.state.ticket.telephone} label="Telephone" onChange={this.handleChange}/>
                                            </div>
                                            <br />
                                            <div className="input-field col s4">
                                                    <i class="material-icons prefix">location_on</i> 
                                                    {/* <TextInput id="address" className="validate" icon="location_on" value={this.state.ticket.address} label="Address" onChange={this.handleChange}/> */}
                                                    <input id="address" type="text" onChange={this.handleChange} value={this.state.ticket.address} className="validate" />
                                                    <label for="address">Address</label>
                                                    
                                            </div>
                                        </div>
                                        <div className="row">
                                                <div className="input-field col s4">
                                                        <TextInput id="address" className="validate" icon="location_city" value={this.state.ticket.city} label="City" onChange={this.handleChange}/>
                                                </div>
                                                <div className="input-field col s4">   
                                                        <TextInput id="postal" className="validate" value={this.state.ticket.postal} label="Postal" onChange={this.handleChange}/>
                                                </div>
                                                <div className="input-field col s4">   
                                                        <TextInput id="fax" className="validate" label="Fax" onChange={this.handleChange}/>
                                                </div>
                                        </div>
                                      
                                        <div className="row">
                                            <h6 className="center-align">Branches</h6>
                                            
                                            <div className="input-field col s4">
                                             
                                                 
                                            <Select label="Choose your option">
                                                            <option value="1">
                                                            Option 1
                                                            </option>
                                                            <option value="2">
                                                            Option 2
                                                            </option>
                                                            <option value="3">
                                                            Option 3
                                                            </option>
                                                            </Select>
                                                
                                            </div>
                                            <div className="input-field col s4">
                                             
                                                 
                                            <Select label="Choose your option">
                                                            <option value="1">
                                                            Option 1
                                                            </option>
                                                            <option value="2">
                                                            Option 2
                                                            </option>
                                                            <option value="3">
                                                            Option 3
                                                            </option>
                                                            </Select>
                                                
                                            </div>
                                            <div className="input-field col s4">
                                             
                                                 
                                            <Select label="Choose your option">
                                                            <option value="1">
                                                            Option 1
                                                            </option>
                                                            <option value="2">
                                                            Option 2
                                                            </option>
                                                            <option value="3">
                                                            Option 3
                                                            </option>
                                                            </Select>
                                                
                                            </div>

                                            
                                            
                                        </div>
                                    
                                        <div className="row">
                                            <h6 className="center-align">One Time Costs </h6>
                                            <h6 className="center-align">Redeployment of Existing Head Office Telephones</h6>
                                            <div className="input-field col s6">
                                                 <input id="deploy" type="number" onChange={this.handleChange}  className="validate" />
                                                 <label for="deploy">On Site Visit to install phone </label>
                                            </div>
                                            <div className="input-field col s6">
                                                 <input id="deployPhone" type="number" onChange={this.handleChange}  className="validate" />
                                                 <label for="deployPhone">On site Visit to  complete cable run and Install phone </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <h6 className="center-align">Regular One Charges-Excluding HeadOffice Telephones</h6>
                                            <div className="input-field col s6">
                                                 <input id="siteVisit" type="number" onChange={this.handleChange}  className="validate" />
                                                 <label for="siteVisit">Site Visit/Programming/Installation</label>
                                            </div>
                                            <div className="input-field col s6">
                                                 <input id="chameleonHeadset" type="number" onChange={this.handleChange}  className="datepicker" />
                                                 <label for="chameleonHeadset">Chameleon 2003 Complete Headset</label>
                                            </div>
                                        </div>
                                        <Button  href="#modal1" type="submit"  waves="light">Submit
                                            <Icon right>send</Icon>
                                        </Button>
                                </form>
                            </div>
                </div>
            </>
        )
    }
}