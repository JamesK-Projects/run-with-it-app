import React, { Component } from 'react';
import runWithItContext from '../runwithitContext';
import config from '../config';

class Goal extends Component {
    static contextType = runWithItContext;
    state = {
        user: this.props.user,
        distanceGoal: this.props.user.goal_distance,
        paceGoalSeconds: this.props.user.goal_pace,
        paceGoalString: '',
        classNameGoalForm: 'hidden',
        classNameGoalStatement: 'show-goal',
        formDistance: 0,
        formMin: 0,
        formSec: 0,
        error: ''
    }

    paceToStr = () => {
        var paceStr = new Date(0);
        paceStr.setSeconds(this.state.paceGoalSeconds);
        this.setState({
            paceGoalString: paceStr.toISOString().substr(14, 5)
        })
    }

    displayForm = () => {
        console.log('display form')
        this.setState({
            classNameGoalForm: 'show-form',
            classNameGoalStatement: 'hidden'
        })
    }

    displayGoal = () => {
        if(this.state.distanceGoal && this.state.paceGoalSeconds){
            this.setState({
                classNameGoalForm: 'hidden',
                classNameGoalStatement: 'show-goal',
            }, 
            () => this.paceToStr())
        } else {
            this.displayForm()
        }
        
    }

    componentDidMount(){
        this.displayGoal()
    }

    handleDistanceInput = (e) => {
        console.log(e.target.value)
        this.setState({
            formDistance: e.target.value
        }, () => {})
    }

    handleMinInput = (e) => {
        this.setState({
            formMin: e.target.value
        })
    }

    handleSecInput = (e) => {
        this.setState({
            formSec: e.target.value
        })
    }

    updateGoals = () => {
        const newGoals = { goal_distance: this.state.distanceGoal, goal_pace: this.state.paceGoalSeconds }
        fetch(config.API_ENDPOINT + `api/users/${this.state.user.id}`, {
			method: 'PATCH',
			body: JSON.stringify(newGoals),
			headers: {
				'content-type': 'application/json'
		 	}
		})
		.then(res => {
			if(!res.ok){
				throw new Error(res.status)
			}
			return res.json() 
		})
		.then(data => {
			this.context.getUsers()
		})
        .then(() => {
            this.displayGoal()
        })
		.catch(error => this.setState({error}))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let newPace = this.state.formSec*1 + this.state.formMin*60
        let newDist = this.state.formDistance

        this.setState({
            distanceGoal: newDist,
            paceGoalSeconds: newPace
        },
        () => this.updateGoals())
    }

    changeGoal = () => {
        this.setState({
            classNameGoalForm: 'show-form',
            classNameGoalStatement: 'hidden'
        })
    }

    render() { 
        return (
            <div className="goal">
                <h2>My Goal:</h2>
                <form className={this.state.classNameGoalForm} onSubmit={e => this.handleSubmit(e)}>
                    I want to run 
                    <input type="text" placeholder="Distance (miles)" onChange={e => this.handleDistanceInput(e)}/>
                    miles with an average pace of
                    <input type="text" className="pace" placeholder="M" onChange={e => this.handleMinInput(e)}/> :
                    <input type="text" className="pace" placeholder="S" onChange={e => this.handleSecInput(e)}/> 
                    per mile.
                    <button type="submit">Set Goal!</button>
                </form>
                <div className={this.state.classNameGoalStatement}>
                    <h3>I want to run {this.state.distanceGoal} miles with an average pace of {this.state.paceGoalString} per mile!</h3>
                    <button onClick={() => this.changeGoal()}>Update Goal</button>
                </div>
            </div>
        );
    }
}
 
export default Goal;