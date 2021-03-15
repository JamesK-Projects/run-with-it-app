import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Goal from '../Goal/Goal';
import RunLog from '../RunLog/RunLog';
import './HomePage.css';
import runWithItContext from '../runwithitContext';

class HomePage extends Component {
    static contextType = runWithItContext;

    render() { 
        return(
            this.context.users.map(user => {
                if(user.id == this.props.match.params.userId){
                    return (
                        <div className="home-page" key={user.id}>
                            <Nav {...this.props}/>
                            <Goal {...this.props} user={user}/>
                            <RunLog {...this.props} user={user}/>
                        </div>
                    );
                }
        })
        )
        
        
    }
}
 
export default HomePage;