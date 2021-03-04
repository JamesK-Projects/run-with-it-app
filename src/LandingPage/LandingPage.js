import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './LandingPage.css';

class LandingPage extends Component {
    render() { 
        return (
            <div className="landing-page">
                <Nav />
                <div className="homepage-section">
                    <h2 className="slogan">Run the track, track the run</h2>
                    <p>Training for a big race, or just simply want to get faster? Use Run With It to set your goals, log your runs, and track your progress.</p>
                    <p>After each run, input your time, distance, and any notes from the run, and Run With It will take care of the rest.</p>
                    <p>[insert screenshot of home page]</p>
                </div>
                <div className="progress-section">
                    <h2 className="slogan">See how far you've come</h2>
                    <p>Run With It turns your run data into clear and simple graphs that reflect your progress.</p>
                    <p>It also keeps track of the PRs you set and lets you know when you break them.</p>
                    <p>All of your previous run data is saved and can be easily accessed</p>
                    <p>[insert screenshot of progress page]</p>
                </div>
                <h2>Create an account now to track your first run!</h2>
            </div>
        );
    }
}
 
export default LandingPage;