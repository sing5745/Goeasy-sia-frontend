import React from 'react';
import Navbar from './navbar/Navbar';

export default class App extends React.Component{

  state = {
    isLogged: false,
    userName: null,
    userEmail : null,
    tracker: null
  }

  loginUser = (name, email) => {
    this.setState({isLogged: true, userName:name, userEmail:email});
  }

  async componentDidMount(){
    await fetch('http://localhost:8080/home', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
               'mode': 'no cors'
            },
          }).then(response => response.json().then(data => this.setState({tracker:data.number})));
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
         />
        
      </>
     )
  }
  
}


