import React, { Component } from 'react';
import runWithItContext from '../runwithitContext';

class LoginForm extends Component {
    static contextType = runWithItContext;
    state = {
        email: '',
        password: '',
        className: 'login-validation-hidden'
    }

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
            console.log(this.props)
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
                    <h2>Log into an existing account</h2>
                    <label id="login-email">Email</label>
                    <input type="text" id="login-email" onChange={e => this.handleEmail(e)}/><br/>
                    <label id="login-password">Password</label>
                    <input type="password" id="login-password" onChange={e => this.handlePassword(e)}/><br/>
                    <button>Log In</button>
                    <p className={this.state.className}>Email and/or Password are incorrect. Please try again.</p>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;