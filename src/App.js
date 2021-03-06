import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom'; 
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';
import ProgressPage from './ProgressPage/ProgressPage';
import DataPage from './DataPage/DataPage';
import config from './config';
import runWithItContext from './runwithitContext';
import './App.css';


class App extends Component {

	// creates the state
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
		},
		() => {}
		)
	}

	setRuns = runs => {
		this.setState({
			runs,
			error: null
		}, 
		() => {}
		)
	}

	// gets all users from api/users endpoint, calls setUsers
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

	// gets all runs from api/runs endpoint, calls setRuns
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

	// calls data fetching functions upon mounting
	componentDidMount() {
		this.getUsers()
		this.getRuns()
	}
	
	// posts a new run to api/runs endpoint, then calls setRuns with new run data
	addRun = (user_id, distance, date, time, note) => {
        const run = {
            user_id: user_id,
            distance: distance,
            date: date,
            time: time,
            note: note
        }
        fetch(config.API_ENDPOINT + `api/runs`, {
            method: 'POST',
            body: JSON.stringify(run),
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
        .then(data => {
            this.setRuns(data)
        })
        .catch(error => this.setState({error}))
    }

	render() { 
		// creates context values which can be accessed throughout app
		const contextValue = {
			users: this.state.users,
			runs: this.state.runs,
			addRun: this.addRun,
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
				<div className="footer">
					<p className="footer-content">Created by James Kernan</p>
				</div>
      		</div>
    	);
  	}
}
 
export default withRouter(App);
