import React from 'react';


export default class ExcelForm extends React.Component
{
    render(){
        
        return (
            <>
                <div class="container">
      <div>
          <h1 class="center-align">Excel Edit</h1>
      </div>
        <div class="row">
                <form class="col s12">
                  <div class="row">
                    <h6 class="center-align">Billing Address</h6>
                    <div class="input-field col s4">
                            <select className="browser-default">
                              <option value="">Choose your option</option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </select>
                            
                    </div>
                    <div class="input-field col s4">
                            <i class="material-icons prefix">phone</i>
                            <input id="icon_telephone" type="tel" class="validate" />
                            <label for="icon_telephone">Telephone</label>
                    </div>
                    <div class="input-field col s4">
                            <i class="material-icons prefix">location_on</i>
                            <input id="city" type="tel" class="validate" />
                            <label for="city">Address</label>
                    </div>
                  </div>
                  <div class="row">
                        <div class="input-field col s4">
                                <i class="material-icons prefix">home</i>
                                <input id="city" type="text" class="validate" />
                                <label for="icon_prefix">Store</label>
                        </div>
                        <div class="input-field col s4">
                                <i class="material-icons prefix">phone</i>
                                <input id="postal" type="tel" class="validate" />
                                <label for="postal">Postal</label>
                        </div>
                        <div class="input-field col s4">
                                <i class="material-icons prefix">location_on</i>
                                <input id="fax" type="tel" class="validate" />
                                <label for="fax">Fax number</label>
                        </div>
                    </div>
                    {/* <!-- Installation address --> */}
                    <div class="row">
                            <h6 class="center-align">Installation Address</h6>
                            <div class="input-field col s4">
                                    <i class="material-icons prefix">home</i>
                                    <input id="icon_prefix" type="text" class="validate" />
                                    <label for="icon_prefix">Store</label>
                            </div>
                            <div class="input-field col s4">
                                    <i class="material-icons prefix">phone</i>
                                    <input id="icon_telephone" type="tel" class="validate" />
                                    <label for="icon_telephone">Telephone</label>
                            </div>
                            <div class="input-field col s4">
                                    <i class="material-icons prefix">location_on</i>
                                    <input id="city" type="tel" class="validate" />
                                    <label for="city">Address</label>
                            </div>
                          </div>
                          <div class="row">
                                <div class="input-field col s4">
                                        <i class="material-icons prefix">home</i>
                                        <input id="city" type="text" class="validate" />
                                        <label for="icon_prefix">Store</label>
                                </div>
                                <div class="input-field col s4">
                                        <i class="material-icons prefix">phone</i>
                                        <input id="postal" type="tel" class="validate" />
                                        <label for="postal">Postal</label>
                                </div>
                                <div class="input-field col s4">
                                        <i class="material-icons prefix">location_on</i>
                                        <input id="fax" type="tel" class="validate" />
                                        <label for="fax">Fax number</label>
                                </div>
                            </div>

                </form>
              </div>
 </div>
            </>
        )
    }
}