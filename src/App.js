import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom'; 
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';
import ProgressPage from './ProgressPage/ProgressPage';
import DataPage from './DataPage/DataPage';
import config from './config';
import runWithItContext from './runwithitContext';


class App extends Component {
	constructor(props){
        super(props);
        this.state = {
			users: [],
			runs: [],
			error: null
        }
	}

	setUsers = users => {
		this.setState({
			users,
			error: null
		})
	}

	setRuns = runs => {
		this.setState({
			runs,
			error: null
		})
	}

	getUsers = () => {
		const url = config.API_ENDPOINT;
		const urlUsers = url + 'api/users';
		fetch(urlUsers, {
			method: 'GET',
		})
		.then(res => {
			if(!res.ok) {
				throw new Error(res.status)
			}
			return res.json()
		})
		.then(this.setUsers)
		.catch(error => this.setState({error}))
	}

	getRuns = () => {
		const url = config.API_ENDPOINT;
		const urlUsers = url + 'api/runs';
		fetch(urlUsers, {
			method: 'GET',
		})
		.then(res => {
			if(!res.ok) {
				throw new Error(res.status)
			}
			return res.json()
		})
		.then(this.setRuns)
		.catch(error => this.setState({error}))
	}

	componentDidMount() {
		this.getUsers()
		this.getRuns()
	}

	render() { 
		const contextValue = {
			users: this.state.users,
			runs: this.state.runs,
			setRuns: this.setRuns,
			getUsers: this.getUsers,
			getRuns: this.getRuns
		}

    	return (
      		<div className="main-container">
        		<div className="routes">
					<runWithItContext.Provider value={contextValue}>
						<Route 
							exact path='/'
							component={LandingPage}
						/>
						<Route 
							path='/login'
							component={LoginPage}
						/>
						<Route
							path='/home/:userId'
							component={HomePage}
						/>
						<Route 
							path='/progress/:userId'
							component={ProgressPage}
						/>
						<Route 
							path='/data/:userId'
							component={DataPage}
						/>
					</runWithItContext.Provider>
        		</div>
      		</div>
    	);
  	}
}
 
export default withRouter(App);
