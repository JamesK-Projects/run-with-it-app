import React, { Component } from 'react';

class PRs extends Component {
    state = {
        classNamePRs: 'hidden'
    }
    setDistancePR = () => {
        let distances = []
        let bestD = 0;
        this.props.runData.map(run => {
            if(run.user_id == this.props.match.params.userId){
                distances.push(run.distance)
                // this.setState({classNamePRs: 'prs'})
            }
        })
        for(let i = 0; i < distances.length; i++){
            if(distances[i] > bestD){
                bestD = distances[i]
            }
        }
        return bestD;
    }

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

    showPRs = () => {
        this.props.runData.map(run => {
            if(run.user_id == this.props.match.params.userId){
                this.setState({
                    classNamePRs: 'prs'
                })
            }
        })
    }

    componentDidMount(){
        this.showPRs()
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