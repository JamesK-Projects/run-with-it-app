import React, { Component } from 'react';

class CreateAccountForm extends Component {
    render() { 
        return (
            <div className="create-account">
                <form className="create-account-form">
                <h2>Create a new account</h2>
                <label id="create-account-name">Name</label>
                <input type="text" id="create-account-name" /><br/>
                <label id="create-account-email">Email</label>
                <input type="text" id="create-account-email" /><br/>
                <label id="create-account-password">Password</label>
                <input type="password" id="create-account-password" /><br/>
                <button>Create Account</button>
            </form>
            </div>
        );
    }
}
 
export default CreateAccountForm;