import React from 'react';

export default class Login extends React.Component
{
    handleSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.ticket);
        console.log('Submitting form');

        this.props.loginUser(event.target.userName.value, event.target.userEmail.value);

        alert("Logged in");
        //this.setState({modal:true});


    }

    render(){
        
        return (
            <>
                <div className="container">
                    <h1 className="center-align">Login</h1>
                    <div className="row">
                        <form className="col s12 center-align" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="userName" type="text" className="validate" />
                            <label htmlFor="userName">Username</label>
                        </div>
                            <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input id="userEmail" type="email" className="validate" />
                            <label htmlFor="userEmail">Email</label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                        </form>
                    </div>
                </div>
                
      
            </>
        )
    }
}