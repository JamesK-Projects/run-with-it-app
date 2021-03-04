import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import DataChart from '../DataChart/DataChart';
import './DataPage.css';

class DataPage extends Component {
    render() { 
        return (
            <div className="data-page">
                <Nav />
                <DataChart />
            </div>
        );
    }
}
 
export default DataPage;