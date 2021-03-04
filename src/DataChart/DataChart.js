import React, { Component } from 'react';
import DataRow from '../DataRow/DataRow';
import DummyData from '../dummyData';

class DataChart extends Component {
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
                {DummyData.dummyRuns.map(run => {
                    if(run.user_id === 1){
                        return <DataRow run={run} key={run.id}/>
                    }
                })}
                
            </div>
        );
    }
}
 
export default DataChart;