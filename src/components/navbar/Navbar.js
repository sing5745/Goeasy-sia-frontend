import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ExcelForm from '../form/ExcelForm';

export default class Navbar extends React.Component
{
    render(){
        
        return (
            <BrowserRouter>
                <nav>
                    <div className="nav-wrapper green">
                        <Link to="/" className="brand-logo">SIA web portal</Link>
                      <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/excel-form">SIA web portal</Link></li>
                        <li><Link to="/">SIA web portal</Link></li>
                        <li><Link to="/">SIA web portal</Link></li>
                      </ul>
                    </div>
                  </nav>
                <Switch>
                    <Route exact path="/excel-form" component={ExcelForm} />
                       
                </Switch>
            </BrowserRouter>
        )
    }
}