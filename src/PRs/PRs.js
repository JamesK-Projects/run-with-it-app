import React, { Component } from 'react';

class PRs extends Component {
    constructor(props){
        super(props);
        this.state = {
            bestD: 0,
        }
    }

    setDistancePR = () => {
        let distances = []
        this.props.runData.map(run => {
            if(run.user_id === 1){
                distances.push(run.distance)
            }
        })
        for(let i = 0; i < distances.length; i++){
            if(distances[i] > this.state.bestD){
                this.setState({
                    bestD: distances[i]
                })
            }
        }
        
        return this.state.bestD;
    }

    setPacePR = () => {
        let distance = []
        let time = []
        let paceNum = []
        let counter = 0;
        let bestPace = 10000;
        let bestPaceStr = ''
        this.props.runData.map(run => {
            if(run.user_id === 1){
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

    render() { 
        return (
            <div className="prs">
                <h2>Best Distance: {this.setDistancePR()} miles</h2>
                <h2>Fastest Pace: {this.setPacePR()} per mile</h2>
            </div>
        );
    }
}
 
export default PRs;