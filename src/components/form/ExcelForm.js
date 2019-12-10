import React from 'react';
import {updateFields, API} from '../../helpers';
import { Button, Icon, TextInput, Preloader} from 'react-materialize';

var data = require('../../data/data.json');

export default class ExcelForm extends React.Component
{

    state = {
        ticket : {
            store: "", 
            telephone: "", 
            address: "", 
            city: "", 
            postal: "",
            phones: null,
            installPhone: null,
            onSiteVisit: null,
            installAndVisit: null
        },
        loading: false
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

        console.log("waiting");
        this.setState({loading:true});
        setTimeout(function(){
            this.props.updateTracker();
            this.props.history.push("/tracker");
        }.bind(this), 1500);

        
        //this.props.
    
      }

      async submitForm(ticket){
        await fetch(API() + 'api/submit', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'mode': 'no cors'
            },
            body: JSON.stringify(ticket),
          }).then(response => response.json().then(data => this.props.linksToExcel(data.file) ));
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
                                            <h6 className="center-align">Equipment</h6>
                                                <div className="input-field col s6 center-align">
                                                        <select id="phones" className="browser-default" onChange={this.handleChange}>
                                                            <option value="" disabled>Choose Number of phones</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                        </select>
                                                        
                                                </div> 
                                            {/* <div className="input-field col s4">
                                                 <input id="mitel5320e" type="number" onChange={this.handleChange}  className="validate" />
                                                 <label for="mitel5320e">Mitel 5320e Telephone</label>
                                            </div> */}
                                        </div>
                                        <div className="row">
                                            <h6 className="center-align">One Time Costs </h6>
                                            <h6 className="center-align">Redeployment of Existing Head Office Telephones</h6>
                                            <div className="input-field col s6">
                                                 <input id="installPhone" type="number" onChange={this.handleChange}  className="validate" />
                                                 <label for="installPhone">On Site Visit to install phone </label>
                                            </div>
                                            <div className="input-field col s6">
                                                 <input id="installAndVisit" type="number" onChange={this.handleChange}  className="validate" />
                                                 <label for="installAndVisit">On site Visit to  complete cable run and Install phone </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <Preloader
                                                active = {this.state.loading}
                                                color="blue"
                                                flashing
                                            />
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