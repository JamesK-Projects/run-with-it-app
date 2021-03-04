import React, { Component } from 'react';

class LoginForm extends Component {
    render() { 
        return (
            <div className="login-form">
                <form className="login-form">
                    <h2>Log into an existing account</h2>
                    <label id="login-email">Email</label>
                    <input type="text" id="login-email" /><br/>
                    <label id="login-password">Password</label>
                    <input type="password" id="login-password" /><br/>
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;