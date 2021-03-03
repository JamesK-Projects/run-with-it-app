import React, { Component } from 'react';

class Goal extends Component {
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