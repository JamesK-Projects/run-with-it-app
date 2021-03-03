import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom'; 
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';
import ProgressPage from './ProgressPage/ProgressPage';
import DataPage from './DataPage/DataPage';

class App extends Component {

	render() { 
    	return (
      		<div className="main-container">
        		<div className="routes">
					<Route 
						exact path='/'
						component={LandingPage}
					/>
					<Route 
						path='/login'
						component={LoginPage}
					/>
					<Route
						path='/home'
						component={HomePage}
					/>
					<Route 
						path='/progress'
						component={ProgressPage}
					/>
					<Route 
						path='/data'
						component={DataPage}
					/>
        		</div>
      		</div>
    	);
  	}
}
 
export default withRouter(App);
