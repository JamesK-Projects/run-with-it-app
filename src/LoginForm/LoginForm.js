import React, { Component } from 'react';

class LoginForm extends Component {
    render() { 
        return (
            <div className="login-form">
                <form class="login-form">
                    <h2>Log into an existing account</h2>
                    <labelfor id="login-email">Email</labelfor>
                    <input type="text" id="login-email" /><br/>
                    <labelfor id="login-password">Password</labelfor>
                    <input type="password" id="login-password" /><br/>
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;