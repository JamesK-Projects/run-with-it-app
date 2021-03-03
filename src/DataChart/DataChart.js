import React, { Component } from 'react';
import DataRow from '../DataRow/DataRow';

class DataChart extends Component {
    render() { 
        return (
            <div className="data-chart">
                <h2>data chart</h2>
                <DataRow />
            </div>
        );
    }
}
 
export default DataChart;