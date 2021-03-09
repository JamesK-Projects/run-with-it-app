import React, { Component } from 'react';
import runWithItContext from '../runwithitContext';

class Goal extends Component {
    static contextType = runWithItContext;
    render() { 
        return (
            <div className="goal">
                <h2>My Goal:</h2>
                I want to run 
                <input type="text" placeholder="Distance (miles)" />
                with an average pace of
                <input type="text" className="pace" placeholder="M" /> :
                <input type="text" className="pace" placeholder="S" /> 
                per mile.
                <button>Set Goal!</button>
            </div>
        );
    }
}
 
export default Goal;