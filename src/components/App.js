import React from 'react';
import Navbar from './navbar/Navbar';
import {API} from '../helpers';

export default class App extends React.Component{

  state = {
    isLogged: false,
    userName: null,
    userEmail : null,
    tracker: null,
    excelCreated: null
  }

  loginUser = (name, email) => {
    this.setState({isLogged: true, userName:name, userEmail:email});
  }

  async componentDidMount(){
    await fetch(API() + 'api/tracker', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
               'mode': 'no cors'
            },
          }).then(response => response.json().then(data => {
            console.log(data);
            this.setState({tracker:data.number});
          }));
  }

  async  detectTracker(){
    await fetch(API() + 'api/tracker', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
               'mode': 'no cors'
            },
          }).then(response => response.json().then(data => {
            console.log(data);
            this.setState({tracker:data.number});
          }));
  }

   updateTracker = () => {
     this.detectTracker()
  }

  linksToExcel = (links) => {
    this.setState({excelCreated:links});
  }
  

  render(){
    console.log(this.state.tracker);

    var number;
    if (this.state.tracker === null){
      number = 'Loading....'
    }else{
      number = this.state.tracker;
    }

    return (
      <>
         <Navbar 
           isLogged={this.state.isLogged} 
           loginUser={this.loginUser}
           userName={this.state.userName}
           userEmail={this.state.userEmail}
           tracker={number}
           updateTracker={this.updateTracker}
           linksToExcel={this.linksToExcel}
           excelCreated={this.state.excelCreated}
         />
        
      </>
     )
  }
  
}


