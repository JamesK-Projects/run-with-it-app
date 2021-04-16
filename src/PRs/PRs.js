import React, { Component } from 'react';
import config from '../config';

class PRs extends Component {
    state = {
        classNamePRs: 'hidden',
        runData: this.props.runData
    }

    // maps through all runs and creates array containing the distances for the specified user's runs
    // finds the greatest distance that the user ran
    setDistancePR = () => {
        let distances = []
        let bestD = 0;
        this.props.runData.map(run => {
            if(run.user_id == this.props.match.params.userId){
                distances.push(run.distance)
            }
        })
        for(let i = 0; i < distances.length; i++){
            if(distances[i] > bestD){
                bestD = distances[i]
            }
        }
        return bestD;
    }

    // maps through all runs and creates arrays for distances and times for the specified user's runs
    // calculates the pace for each run and finds the fastest pace
    setPacePR = () => {
        let distance = []
        let time = []
        let paceNum = []
        let counter = 0;
        let bestPace = 10000;
        let bestPaceStr = ''
        this.props.runData.map(run => {
            if(run.user_id == this.props.match.params.userId){
                distance.push(run.distance)
                time.push(run.time)
            }
            while(counter < distance.length){
                paceNum.push(time[counter]/distance[counter])
                counter ++
            }
        })
        for(let i = 0; i < paceNum.length; i++){
            if(paceNum[i] < bestPace){
                bestPace = paceNum[i]
            }
        }

        var date = new Date(0);
        date.setSeconds(bestPace);
        bestPaceStr = date.toISOString().substr(14, 5);
        return bestPaceStr;
    }

    // only shows PRs once a run has been logged by the user
    showPRs = () => {
        this.state.runData.map(run => {
            if(run.user_id == this.props.match.params.userId){
                this.setState({
                    classNamePRs: 'prs'
                })
            }
        })
    }

    componentDidMount(){

        // checks to see if runData props are passed down from parent. If not, sends a GET request to get all run data, then calls showPRs()
        if(this.props.runData.length == 0){
            const url = config.API_ENDPOINT;
            const urlRuns = url + 'api/runs';
            fetch(urlRuns, {
                method: 'GET',
            })
            .then(res => {
                if(!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(data => {
                this.setState({
                    runData: data
                },
                () => {this.showPRs()})
            })
            .catch(error => this.setState({error}))
            }
        else{
            this.showPRs()
        }
    }

    render() { 
        return (
            <div className={this.state.classNamePRs}>
                <h2 className="heading">Personal Records</h2>
                <div className="records">
                    <h3 className="personal-best">Best Distance: {this.setDistancePR()} miles</h3>
                    <h3 className="personal-best">Fastest Pace: {this.setPacePR()} per mile</h3>
                </div>
            </div>
        );
    }
}
 
export default PRs;