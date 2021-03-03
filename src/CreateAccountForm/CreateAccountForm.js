import React, { Component } from 'react';

class CreateAccountForm extends Component {
    render() { 
        return (
            <div className="create-account">
                <form class="create-account-form">
                <h2>Create a new account</h2>
                <labelfor id="create-account-name">Name</labelfor>
                <input type="text" id="create-account-name" /><br/>
                <labelfor id="create-account-email">Email</labelfor>
                <input type="text" id="create-account-email" /><br/>
                <labelfor id="create-account-password">Password</labelfor>
                <input type="password" id="create-account-password" /><br/>
                <button>Create Account</button>
            </form>
            </div>
        );
    }
}
 
export default CreateAccountForm;