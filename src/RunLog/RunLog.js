import React, { Component } from 'react';
import config from '../config';
import runWithItContext from '../runwithitContext';

class RunLog extends Component {
    static contextType = runWithItContext

    state = {
        user_id: this.props.match.params.userId,
        distance: '',
        date: '',
        time: '',
        note: '',
        hours: '',
        minutes: '',
        seconds: '',
        validateFieldsClass: 'hidden',
        error: '',
        classNameGoalAchieved: 'hidden'
    }

    // converts all time values to seconds to allow for easy computations
    convertTime = () => {
        const totalTimeInSeconds = (this.state.hours * 3600) + (this.state.minutes * 60) + (this.state.seconds * 1)
        this.setState({
            time: totalTimeInSeconds
        })
    }

    handleDateInput = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleDistanceInput = (e) => {
        this.setState({
            distance: e.target.value
        })
    }

    handleHoursInput = (e) => {
        this.setState({
            hours: e.target.value
        }, () => {
            this.convertTime()
        })
        
    }

    handleMinutesInput = (e) => {
        this.setState({
            minutes: e.target.value
        }, () => {
            this.convertTime()
        })
        
    }

    handleSecondsInput = (e) => {
        this.setState({
            seconds: e.target.value
        }, () => {
            this.convertTime()
        })
        
    }

    handleNoteInput = (e) => {
        this.setState({
            note: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        // checks to make sure all required fields are filled. If not, show the message to fill all fields
        if(this.state.distance == 0 || this.state.time == 0 || this.state.date == ''){
            this.setState({
                validateFieldsClass: 'shown'
            })
        }

        // if form is filled correctly, sends a POST request to the runs endpoint to add the run data to the runs table
        else {
            const run = {
                user_id: this.state.user_id,
                distance: this.state.distance,
                date: this.state.date,
                time: this.state.time,
                note: this.state.note
            }

            this.checkGoal(run)
            fetch(config.API_ENDPOINT + 'api/runs', {
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
                this.context.getRuns()
            })
            .then(() => {
                this.setState({
                    distance: '',
                    date: '',
                    time: '',
                    note: '',
                    hours: '',
                    minutes: '',
                    seconds: '',
                })
            })
            .catch(error => this.setState({error}))
        }
    }

    // checks to see if the logged run meets the user's goals for pace and distance. If so, show a congratulatory message
    checkGoal = (loggedRun) => {
        if(loggedRun.distance >= this.props.user.goal_distance && loggedRun.time/loggedRun.distance <= this.props.user.goal_pace){
            this.setState({
                classNameGoalAchieved: 'achieved'
            })
        }
    }

    render() { 
        return (
            <div className="run-data">
                <h2 className={this.state.classNameGoalAchieved}>You have achieved your goal! Congratulations on your hard work!</h2>
                <div className="runlog-form">
                    <h2 className="heading">Log your run</h2>
                    <form className="run-log" onSubmit={e => this.handleSubmit(e)}>
                    <label id="date">* Today's Date</label><br/>
                    <input type="date" id="date" className="date" value={this.state.date} onChange={e => this.handleDateInput(e)}/><br/>
                    <label id="distance">* How far did you run?</label><br/>
                    <input type="text" id="distance" className="distance form-input" placeholder="Distance (Miles)" value={this.state.distance} onChange={e => this.handleDistanceInput(e)}/><br/>
                    <label id="time">* How long did you run for?</label><br/>
                    <input type="text" id="hours" className="time form-input" placeholder="H" value={this.state.hours} onChange={e => this.handleHoursInput(e)}/> :
                    <input type="text" id="minutes" className="time form-input" placeholder="M" value={this.state.minutes} onChange={e => this.handleMinutesInput(e)}/> :
                    <input type="text" id="seconds" className="time form-input" placeholder="S" value={this.state.seconds} onChange={e => this.handleSecondsInput(e)}/><br/>
                    <label id="notes">Anything to note?</label><br/>
                    <textarea id="notes" className="notes form-input" value={this.state.note} onChange={e => this.handleNoteInput(e)} rows={3}/><br/>
                    <button type="submit">Submit</button>
                    <p className={this.state.validateFieldsClass}>Please fill out all required fields</p>
                    <p className="text">* (Required field)</p>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default RunLog;