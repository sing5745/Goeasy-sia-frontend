import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ExcelForm from '../form/ExcelForm';
import Login from '../form/Login';
// import Header from '../header/Header';
import CreateExcel from '../form/CreateExcel';
import Tracker from '../form/Tracker';

export default class Navbar extends React.Component
{
    render(){
        
        return (
            <BrowserRouter>
                <nav>
                    <div className="nav-wrapper green">
                        <Link to="/" className="brand-logo">SIA Web Portal</Link>
                      <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/excel-form">SIA web portal</Link></li>
                        <li><Link to="/create-excel">Create Excel</Link></li>
                        <li>
                          <Link to="/tracker">
                            <span className="new badge black" data-badge-caption="tracker">{
                              this.props.tracker}
                            </span>
                            </Link>
                        </li>
                        <li>
                          <Link to="/tracker">
                            <span className="new badge black" data-badge-caption="tracker">{
                              this.props.tracker}
                            </span>
                            </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                <Switch>
                <Route 
                      exact path="/"  
                      render=
                      {
                        (props) => 
                                <Login
                                    {...props} 
                                    isLogged={this.props.isLogged} 
                                    loginUser={this.props.loginUser}
                                    userName={this.props.userName}
                                    userEmail={this.props.userEmail}
                                />
                      }
                    />
                  {/* {
                    this.props.isLogged ? <Route exact path="/excel-form" component={ExcelForm} /> :
                    <Header providedLink={<Link to="/" className="brand-logo">Login</Link>}/>
                  } */}
                    
                    <Route exact path="/" component={Login} />
                    <Route exact path="/excel-form" 
                    render=
                    {
                      (props) => 
                              <ExcelForm 
                                tracker={this.props.tracker} 
                                updateTracker={this.props.updateTracker}
                                history={props.history}
                                linksToExcel={this.props.linksToExcel}/>
                    }
                    />   
                    <Route exact path="/tracker" 
                    render = {
                      (props) => <Tracker excelCreated={this.props.excelCreated} />
                    } />  
                    <Route exact path="/create-excel" component={CreateExcel} /> 
                </Switch>
            </BrowserRouter>
        )
    }
}