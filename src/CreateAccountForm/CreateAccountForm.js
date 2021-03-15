import React, { Component } from 'react';
import runWithItContext from '../runwithitContext';
import config from '../config';

class CreateAccountForm extends Component {
    static contextType = runWithItContext;
    state = {
        name: '',
        email: '',
        password: '',
        goal_distance: 0,
        goal_pace: 0,
        classNameEmailTaken: 'hidden',
        classNameFillAllFields: 'hidden',
        classNameSuccess: 'hidden'
    }

    handleNameInput = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleEmailInput = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordInput = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    validateInputs = (e) => {
        e.preventDefault()
        if(this.state.name == '' || this.state.email == '' || this.state.password == ''){
            this.setState({classNameFillAllFields: 'shown'})
        } else {
            this.setState({classNameFillAllFields: 'hidden'})
            this.confirmUniqueEmail(e)
        }
    }

    confirmUniqueEmail = (e) => {
        e.preventDefault()
        var uniqueEmail = true;
        this.context.users.map(user => {
            if(user.email === this.state.email){
                uniqueEmail = false;
            }
        })
        if(uniqueEmail == false) {
            this.setState({classNameEmailTaken: 'shown'})
        } else {
            this.setState({classNameEmailTaken: 'hidden'})
            this.handleCreateAccount(e)
        }
    }

    handleCreateAccount = (e) => {
        e.preventDefault()
        fetch(config.API_ENDPOINT + 'api/users', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if(!res.ok){
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(() => {
            this.context.getUsers()
        })
        .then(() => {
            this.setState({
                name: '',
                email: '',
                password: '',
                goal_distance: 0,
                goal_pace: 0
            })
        })
        .then(() => {
            this.setState({classNameSuccess: 'shown-success'})
        })
        .catch(error => this.setState({error}))
    }



    render() { 
        return (
            <div className="create-account">
                <form className="create-account-form" onSubmit={e => this.validateInputs(e)}>
                <h2 className="heading">Create a new account</h2>
                <div className="form-content">
                    <label id="create-account-name">Name</label>
                    <input className="form-input" type="text" id="create-account-name" onChange={e => this.handleNameInput(e)}/><br/>
                    <label id="create-account-email">Email</label>
                    <input className="form-input" type="text" id="create-account-email" onChange={e => this.handleEmailInput(e)}/><br/>
                    <p className={this.state.classNameEmailTaken}>This email address is already taken, please use a different email</p>
                    <label id="create-account-password">Password</label>
                    <input className="form-input" type="password" id="create-account-password" onChange={e => this.handlePasswordInput(e)}/><br/>
                    <button>Create Account</button>
                    <p className={this.state.classNameFillAllFields}>Please fill out all fields</p>
                    <p className={this.state.classNameSuccess}>Account created! Please log in</p>
                </div>
            </form>
            </div>
        );
    }
}
 
export default CreateAccountForm;