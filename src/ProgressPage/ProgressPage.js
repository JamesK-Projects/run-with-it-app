import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import GraphDistance from '../GraphDistance/GraphDistance';
import GraphPace from '../GraphPace/GraphPace';
import GraphSelect from '../GraphSelect/GraphSelect';
import PRs from '../PRs/PRs';
import './ProgressPage.css';
import DummyData from '../dummyData';

class ProgressPage extends Component {
    render() { 
        return (
            <div className="progress-page">
                <Nav />
                <GraphDistance runData={DummyData.dummyRuns}/>
                <GraphPace runData={DummyData.dummyRuns}/>
                <GraphSelect />
                <PRs runData={DummyData.dummyRuns}/>
            </div>
        );
    }
}
 
export default ProgressPage;