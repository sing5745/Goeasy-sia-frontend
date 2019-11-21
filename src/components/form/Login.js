import React from 'react';
import { Modal, Button, Icon} from 'react-materialize';

export default class Login extends React.Component
{
   

    handleSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.ticket);
        console.log('Submitting form');

        this.props.loginUser(event.target.userName.value, event.target.userEmail.value);

        alert("Logged in");
        //this.setState({modal:true});

        console.log(this.props.location.pathname );

       
        this.props.history.push(`/excel-form`);
        
                //(this.props.history.location.pathname !== "excel-form") ? this.props.history.push(`/excel-form`);
        //this.props.history.push(`/excel-form`);

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
                        <Button  href="#modal1" type="submit"  waves="light">Submit
                            <Icon right>send</Icon>
                        </Button>
                        </form>
                    </div>
                </div>
                <Modal id="modal1" header="Login">
                    alert("Hi");
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Modal>
                
      
            </>
        )
    }
}