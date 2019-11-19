import React from 'react';
import {updateFields} from '../../helpers';
var data = require('../../data/data.json');

export default class ExcelForm extends React.Component
{

    state = {
        ticket : {
            store: " ", 
            telephone: " ", 
            address: " ", 
            city: " ", 
            postal: " ",
            callCenter: null
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
            
         this.setState({ticket:ticket});
        
         console.log(ticket);
      };

    render(){
        
        return (
            <>
                <div className="container">
                    <div>
                        <h1 className="center-align">Excel Edit</h1>
                    </div>
                        <div className="row">
                                <form className="col s12">
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
                                                    <i className="material-icons prefix">home</i>
                                                    <input id="store" type="text" onChange={this.handleChange} className="validate" />
                                                    <label for="store">Store</label>
                                            </div>
                                            <div className="input-field col s4">
                                                    <i className="material-icons prefix">phone</i>
                                                    <input id="telephone" type="tel" onChange={this.handleChange} value={this.state.ticket.telephone} className="validate" />
                                                    <label for="telephone">Telephone</label>
                                            </div>
                                            <div className="input-field col s4">
                                                    <i className="material-icons prefix">location_on</i>
                                                    <input id="address" type="tel" onChange={this.handleChange} value={this.state.ticket.address} className="validate" />
                                                    <label for="address">Address</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                                <div className="input-field col s4">
                                                        <i className="material-icons prefix">location_city</i>
                                                        <input id="city" type="text"onChange={this.handleChange}  value={this.state.ticket.city}className="validate" />
                                                        <label for="city">City</label>
                                                </div>
                                                <div className="input-field col s4">
                                                        
                                                        <input id="postal" type="tel" onChange={this.handleChange} value={this.state.ticket.postal}  className="validate" />
                                                        <label for="postal">Postal</label>
                                                </div>
                                                <div className="input-field col s4">
                                                        
                                                        <input id="fax" type="tel" onChange={this.handleChange} className="validate" />
                                                        <label for="fax">Fax number</label>
                                                </div>
                                        </div>
                                        <div className="row">
                                                 <h6 className="center-align">Head Office:</h6>
                                                <div className="input-field col s12">
                                                        <input id="callCenter" type="number" onChange={this.handleChange}  className="validate" />
                                                        <label for="callCenter">Call Center Software-ACD Agent & Reporting Bundle:</label>
                                                </div>
                                        </div>
                                        <div className="row">
                                            <h6 className="center-align">Branches</h6>
                                            <div className="input-field col s4">
                                                 <input id="mitel5320e" type="number" onChange={this.handleChange}  className="validate" />
                                                 <label for="mitel5320e">Mitel 5320e Telephone</label>
                                            </div>
                                            <div className="input-field col s4">
                                                 <input id="model5320" type="number" onChange={this.handleChange}  className="validate" />
                                                 <label for="model5320">Model 5320 Telephone Licenses</label>
                                            </div>
                                            <div className="input-field col s4">
                                                 <input id="category5e" type="number" onChange={this.handleChange}  className="validate" />
                                                 <label for="category5e">Category 5e Cable-Plenum</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s4">
                                                 <input id="menuWirelessAP" type="number" onChange={this.handleChange}  className="validate" />
                                                 <label for="menuWirelessAP">Meru Wireless Access Points</label>
                                            </div>
                                            <div className="input-field col s4">
                                                 <input id="actiCamera56" type="number" onChange={this.handleChange}  className="validate" />
                                                 <label for="actiCamera56">Acti Camera-Model B56</label>
                                            </div>
                                            <div className="input-field col s4">
                                                 <input id="actiCameraE32" type="number" onChange={this.handleChange}  className="validate" />
                                                 <label for="actiCameraE32">Acti Camera-Model E32 (Cash Register)</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                 <input id="ipPhone5330E" type="number" onChange={this.handleChange}  className="validate" />
                                                 <label for="ipPhone5330E">5330E IP Telephone & Wireless Headset Bundle for Front Desk</label>
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

                                </form>
                            </div>
                </div>
            </>
        )
    }
}