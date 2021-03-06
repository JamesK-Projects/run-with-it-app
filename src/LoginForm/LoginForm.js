import React, { Component } from 'react';
import runWithItContext from '../runwithitContext';

class LoginForm extends Component {
    static contextType = runWithItContext;
    state = {
        email: '',
        password: '',
        className: 'login-validation-hidden'
    }

    // map through users, check to see if entered credentials match a user in the db.
    // if there's a match, get redirected to the home page for that user
    handleSubmit = (e) => {
        e.preventDefault()
        var correctCredentials = false;
        var correctUser = '';
        this.context.users.map(user => {
            if (user.email === this.state.email && user.password === this.state.password){
                correctCredentials = true;
                correctUser = user;
            } 
        })
        if (correctCredentials == true){
            this.props.history.push(`/home/${correctUser.id}`)
            this.setState({className: 'login-validation-hidden'})
        } else this.setState({className: 'login-validation-shown'})
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() { 
        return (
            <div className="login-form">
                <form className="login-form" onSubmit={e => this.handleSubmit(e)}>
                    <h2 className="heading">Log into an existing account</h2>
                    <div className="form-content">
                        <label id="login-email">Email</label>
                        <input className="form-input" type="text" id="login-email" onChange={e => this.handleEmail(e)}/><br/>
                        <label id="login-password">Password</label>
                        <input className="form-input" type="password" id="login-password" onChange={e => this.handlePassword(e)}/><br/>
                        <button>Log In</button>
                        <p className={this.state.className}>Email and/or Password are incorrect. Please try again.</p>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;