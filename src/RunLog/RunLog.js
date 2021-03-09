import React, { Component } from 'react';
import config from '../config';
import runWithItContext from '../runwithitContext';

class RunLog extends Component {
    static contextType = runWithItContext

    state = {
        user_id: this.props.match.params.userId,
        distance: 0,
        date: '',
        time: 0,
        note: '',
        hours: 0,
        minutes: 0,
        seconds: 0,
        validateFieldsClass: 'hidden',
        error: ''
    }

    convertTime = () => {
        const totalTimeInSeconds = (this.state.hours * 3600) + (this.state.minutes * 60) + (this.state.seconds * 1)
        console.log(totalTimeInSeconds)
        this.setState({
            time: totalTimeInSeconds
        })
        console.log(this.state.time)
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
        if(this.state.distance == 0 || this.state.time == 0 || this.state.date == ''){
            this.setState({
                validateFieldsClass: 'shown'
            })
        }
        else {
            this.context.addRun(this.state.user_id, this.state.distance, this.state.date, this.state.time, this.state.note);
            this.setState({
                distance: 0,
                date: '',
                time: 0,
                note: ''
            })
        }
    }


    render() { 
        return (
            <div className="run-data">
                <h2>Log your run</h2>
                <form className="run-log" onSubmit={e => this.handleSubmit(e)}>
                    <label id="date">* Today's Date</label><br/>
                    <input type="date" id="date" className="date" onChange={e => this.handleDateInput(e)}/><br/>
                    <label id="distance">* How far did you run?</label><br/>
                    <input type="text" id="distance" className="distance" placeholder="Distance (Miles)" onChange={e => this.handleDistanceInput(e)}/><br/>
                    <label id="time">* How long did you run for?</label><br/>
                    <input type="text" id="hours" className="time" placeholder="H" onChange={e => this.handleHoursInput(e)}/> :
                    <input type="text" id="minutes" className="time" placeholder="M" onChange={e => this.handleMinutesInput(e)}/> :
                    <input type="text" id="seconds" className="time" placeholder="S" onChange={e => this.handleSecondsInput(e)}/><br/>
                    <label id="notes">Anything to note?</label><br/>
                    <input type="text" id="notes" className="notes" onChange={e => this.handleNoteInput(e)}/><br/>
                    <button type="submit">Submit</button>
                    <p className={this.state.validateFieldsClass}>Please fill out all required fields</p>
                    <p>* (Required field)</p>
                </form>
            </div>
        );
    }
}
 
export default RunLog;