import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';
import logo from '../images/runwithit_logo.svg';

class Nav extends Component {
    state = {
        navLoggedIn: 'hide-nav',
        navLoggedOut: 'show-nav',
        path: ''
    }

    // changes the class of nav tabs depending on whether or not a user is logged in
    handleNav = () => {
        if(this.props.match){
            this.setState({
                navLoggedIn: 'show-nav',
                navLoggedOut: 'hide-nav',
                path: `/${this.props.match.params.userId}`
            })
        } 
        else return;
    }

    componentDidMount(){
        this.handleNav()
    }

    render() { 
        return (
            <header>
                <div className="name-and-logo">
                    <img className="logo" src={logo}></img>
                    <div className="app-name">
                        <h1>Run With It</h1>
                    </div>
                </div>
                <div className="tabs">
                    <nav className={this.state.navLoggedOut}>
                        <Link to="/login">
                            <span className="login">Log In / Create Account</span>
                        </Link>
                    </nav>
                    <nav className={this.state.navLoggedIn}>
                        <Link to={`/home${this.state.path}`}>
                            <span className="home">Home</span>
                        </Link>
                    </nav>
                    <nav className={this.state.navLoggedIn}>
                        <Link to={`/progress${this.state.path}`}>
                            <span className="your-progress">Your Progress</span>
                        </Link>
                    </nav>
                    <nav className={this.state.navLoggedIn}>
                        <Link to={`/data${this.state.path}`}>
                            <span className="data">Run Data</span>
                        </Link>
                    </nav>
                    <nav className={this.state.navLoggedIn}>
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