import React, { Component } from 'react';
import runWithItContext from '../runwithitContext';

class Goal extends Component {
    static contextType = runWithItContext;
    state = {
        user: {},
        distanceGoal: 0,
        paceGoalSeconds: 0,
        paceGoalString: '',
        classNameGoalForm: 'show-form',
        classNameGoalStatement: 'hidden'
    }

    displayGoal = () => {
        this.context.users.map(user => {
            if(user.id == this.props.match.params.userId){
                console.log(user.goal_pace)
                this.setState({
                    user: user,
                    distanceGoal: user.goal_distance,
                    paceGoalSeconds: user.goal_pace
                })
                console.log(this.state.paceGoalSeconds)
            }
        })
        if(this.state.user.goal_distance !== 0 && this.state.user.goal_pace !== 0){
            this.setState({
                classNameGoalForm: 'hidden',
                classNameGoalStatement: 'show-goal',
            })
        }
    }

    componentDidMount(){
        this.displayGoal()
    }

    render() { 
        return (
            <div className="goal">
                <h2>My Goal:</h2>
                <form className={this.state.classNameGoalForm}>
                    I want to run 
                    <input type="text" placeholder="Distance (miles)" />
                    with an average pace of
                    <input type="text" className="pace" placeholder="M" /> :
                    <input type="text" className="pace" placeholder="S" /> 
                    per mile.
                    <button type="submit">Set Goal!</button>
                </form>
                <div className={this.state.classNameGoalStatement}>
                    <h3>I want to run {this.state.distanceGoal} miles with an average pace of {this.state.paceGoalString} per mile!</h3>
                    <button>Update Goal</button>
                </div>
            </div>
        );
    }
}
 
export default Goal;