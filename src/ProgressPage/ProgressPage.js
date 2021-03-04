import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import GraphDistance from '../GraphDistance/GraphDistance';
import GraphPace from '../GraphPace/GraphPace';
//import GraphSelect from '../GraphSelect/GraphSelect';
import PRs from '../PRs/PRs';
import './ProgressPage.css';
import DummyData from '../dummyData';

class ProgressPage extends Component {
    constructor(props){
        super(props);
        this.state = {
			selectDistance: true,
            selectPace: false
        }
	}

    selectGraphD = () => {
        this.setState({
            selectDistance: true,
            selectPace: false
        })
    }

    selectGraphP = () => {
        this.setState({
            selectDistance: false,
            selectPace: true
        })
    }

    showGraph = () => {
        if(this.state.selectDistance === true){
            return (
                <GraphDistance runData={DummyData.dummyRuns}/>
            )
        }
        else {
            return(
                <GraphPace runData={DummyData.dummyRuns}/>
            )
        }
    }

    highlightSelectorD = () => {
        if(this.state.selectDistance === true){
            return "selector true"
        }
        else {
            return "selector"
        }
    }

    highlightSelectorP = () => {
        if(this.state.selectPace === true){
            return "selector true"
        }
        else {
            return "selector"
        }
    }

    render() { 
        return (
            <div className="progress-page">
                <Nav />
                {this.showGraph()}
                <div className="graph-select">
                    <span className={this.highlightSelectorD()} onClick={this.selectGraphD}>Distance</span>
                    <span className={this.highlightSelectorP()} onClick={this.selectGraphP}>Pace</span>
                </div>
                <PRs runData={DummyData.dummyRuns}/>
            </div>
        );
    }
}
 
export default ProgressPage;