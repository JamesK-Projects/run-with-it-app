import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import GraphDistance from '../GraphDistance/GraphDistance';
import GraphPace from '../GraphPace/GraphPace';
import PRs from '../PRs/PRs';
import './ProgressPage.css';
import DummyData from '../dummyData';
import runwithitContext from '../runwithitContext'

class ProgressPage extends Component {
    static contextType = runwithitContext;

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
                <GraphDistance runData={this.context.runs} {...this.props}/>
            )
        }
        else {
            return(
                <GraphPace runData={this.context.runs} {...this.props}/>
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
                <Nav {...this.props}/>
                {this.showGraph()}
                <div className="graph-select">
                    <span className={this.highlightSelectorD()} onClick={this.selectGraphD}>Distance</span>
                    <span className={this.highlightSelectorP()} onClick={this.selectGraphP}>Pace</span>
                </div>
                <PRs runData={this.context.runs} {...this.props}/>
            </div>
        );
    }
}
 
export default ProgressPage;