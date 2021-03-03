import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import LoginForm from '../LoginForm/LoginForm';
import CreateAccountForm from '../CreateAccountForm/CreateAccountForm';
import './LoginPage.css'

class LoginPage extends Component {
    render() { 
        return (
            <div className="login-page">
                <Nav />
                <LoginForm />
                <CreateAccountForm />
            </div>
        );
    }
}
 
export default LoginPage;