import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './LandingPage.css';
import progressPageImage from '../images/progress-page.png';
import homePageImage from '../images/home-page.png'


class LandingPage extends Component {
    render() { 
        return (
            <div className="landing-page">
                <Nav />
                <h2 className="slogan heading">Run the track, track the run</h2>
                <div className="homepage-section">
                    <div className="homepage-section-content">
                        <p className="text">Training for a big race, or just simply want to get faster? Use Run With It to set your goals, log your runs, and track your progress.</p>
                        <p className="text">After each run, input your time, distance, and any notes from the run, and Run With It will take care of the rest.</p> 
                    </div>
                    <img className="homepage-screenshot screenshot" src={homePageImage} />
                </div>
                <div className="progress-section">
                    <h2 className="slogan heading">See how far you've come</h2>
                    <div className="progress">
                        <div className="progress-section-content">
                            <p className="text">Run With It turns your run data into clear and simple graphs that reflect your progress.</p>
                            <p className="text">It also keeps track of the PRs you set and lets you know when you break them.</p>
                            <p className="text">All of your previous run data is saved and can be easily accessed</p>
                        </div>
                        <img className="progress-section-screenshot screenshot" src={progressPageImage} />
                    </div>
                </div>
                <div className="create-account-now">
                    <h2 className="heading">Create an account now to get started!</h2>
                    <p className="demo">To see how the app works, log in with these demo login credentials:</p>
                    <p>Email: demo@test.com</p>
                    <p>Password: demo123</p>
                </div>
            </div>
        );
    }
}
 
export default LandingPage;