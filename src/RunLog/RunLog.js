import React, { Component } from 'react';

class RunLog extends Component {
    render() { 
        return (
            <div className="run-data">
                <h2>Log your run</h2>
                <label id="date">Today's Date</label><br/>
                <input type="date" id="date" className="date" /><br/>
                <label id="distance">How far did you run?</label><br/>
                <input type="text" id="distance" className="distance" placeholder="Distance (Miles)" /><br/>
                <label id="time">How long did you run for?</label><br/>
                <input type="text" id="hours" className="time" placeholder="H" /> :
                <input type="text" id="minutes" className="time" placeholder="M" /> :
                <input type="text" id="seconds" className="time" placeholder="S" /><br/>
                <label id="notes">Anything to note?</label><br/>
                <input type="text" id="notes" className="notes" /><br/>
                <button>Submit</button>
            </div>
        );
    }
}
 
export default RunLog;