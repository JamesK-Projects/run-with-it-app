import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

class Nav extends Component {
    state = {
        navLoggedIn: 'hide-nav',
        navLoggedOut: 'show-nav',
        path: ''
    }

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
                <div className="app-name">
                    <h1>Run With It</h1>
                </div>
                <div className="tabs">
                    <nav className={this.state.navLoggedOut}>
                        <Link to="/login">
                            <span className="login">Login In / Create Account</span>
                        </Link>
                    </nav>
                    <nav className={this.state.navLoggedIn}>
                        <Link to={`/home${this.state.path}`}>
                            <span className="home">Home</span>
                        </Link>
                    </nav>
                    <nav className={this.state.navLoggedIn}>
                        <Link to={`/progress${this.state.path}`}>
                            <span className="progress">Your Progress</span>
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