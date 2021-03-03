import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

class Nav extends Component {
    render() { 
        return (
            <header>
                <div className="app-name">
                    <h1>Run With It</h1>
                </div>
                <div className="tabs">
                    <nav className="login-tab">
                        <Link to="/login">
                            <span className="login">Login In / Create Account</span>
                        </Link>
                    </nav>
                    <nav className="home-tab">
                        <Link to="/home">
                            <span className="home">Home</span>
                        </Link>
                    </nav>
                    <nav className="progress-tab">
                        <Link to="/progress">
                            <span className="progress">Your Progress</span>
                        </Link>
                    </nav>
                    <nav className="data-tab">
                        <Link to="/data">
                            <span className="data">Run Data</span>
                        </Link>
                    </nav>
                    <nav className="logout-tab">
                        <Link to="/">
                            <span className="logout">Log Out</span>
                        </Link>
                    </nav>
                    
                </div>
            </header>
        );
    }
}
 
export default Nav;