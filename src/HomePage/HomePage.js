import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Goal from '../Goal/Goal';
import RunLog from '../RunLog/RunLog';
import './HomePage.css';

class HomePage extends Component {
    render() { 
        return (
            <div className="home-page">
                <Nav {...this.props}/>
                <Goal />
                <RunLog {...this.props}/>
            </div>
        );
    }
}
 
export default HomePage;