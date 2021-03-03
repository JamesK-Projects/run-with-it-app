import React, { Component } from 'react';

class RunLog extends Component {
    render() { 
        return (
            <div className="run-data">
                <h2>Log your run</h2>
                <labelfor id="date">Today's Date</labelfor><br/>
                <input type="date" id="date" className="date" /><br/>
                <labelfor id="distance">How far did you run?</labelfor><br/>
                <input type="text" id="distance" className="distance" placeholder="Distance (Miles)" /><br/>
                <labelfor id="time">How long did you run for?</labelfor><br/>
                <input type="text" id="hours" className="time" placeholder="H" /> :
                <input type="text" id="minutes" className="time" placeholder="M" /> :
                <input type="text" id="seconds" className="time" placeholder="S" /><br/>
                <labelfor id="notes">Anything to note?</labelfor><br/>
                <input type="text" id="notes" className="notes" /><br/>
                <button>Submit</button>
            </div>
        );
    }
}
 
export default RunLog;