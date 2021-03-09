import React, { Component } from 'react';
import DataRow from '../DataRow/DataRow';
import runWithItContext from '../runwithitContext';

class DataChart extends Component {
    static contextType = runWithItContext;
    // state = {
    //     counter: 0
    // }

    // alternateRow = () => {
    //     this.setState({
    //         counter: this.state.counter ++
    //     })

    //     console.log(this.state.counter)

    //     if(this.state.counter % 2 === 0){
    //         return 'grey'
    //     }
    // }

    render() { 
        return (
            <div className="data-chart">
                <h2>Your Run Data</h2>
                <div className="labels">
                    <div className="label"><h4>Date</h4></div>
                    <div className="label"><h4>Distance</h4></div>
                    <div className="label"><h4>Pace/mile</h4></div>
                    <div className="label"><h4>Time</h4></div>
                    <div className="label"><h4>Notes</h4></div>
                </div>
                {this.context.runs.map(run => {
                    if(run.user_id == this.props.match.params.userId){
                        return (
                            // <div className={this.alternateRow()}>
                                <DataRow run={run} key={run.id}/>
                            // </div>
                        )
                    }
                })}
                
            </div>
        );
    }
}
 
export default DataChart;