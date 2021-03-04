import React, { Component } from 'react';

class DataRow extends Component {

    calculatePace = () => {
        let time = this.props.run.time
        let distance = this.props.run.distance
        let pace = ''
        var date = new Date(0);
        date.setSeconds(time/distance);
        pace = date.toISOString().substr(14, 5);

        console.log(pace)
        return pace
    }

    formatTime = () => {
        let time = this.props.run.time
        var date = new Date(0);
        let timeStr = ''
        date.setSeconds(time);
        if(time < 3600){
            timeStr = date.toISOString().substr(14, 5);
        }
        else {
            timeStr = date.toISOString().substr(11, 8)
        }

        return timeStr;
    }

    render() { 
        return (
            <div className="data-rows">
                <div className="row">
                    <div className="item">
                        <p>
                            {this.props.run.date}
                        </p>
                    </div>
                    <div className="item">
                        <p>
                            {this.props.run.distance}
                        </p>
                    </div>
                    <div className="item">
                        <p>
                            {this.calculatePace()}
                        </p>
                    </div>
                    <div className="item">
                        <p>
                            {this.formatTime()}
                        </p>
                    </div>
                    <div className="item">
                        <p>
                            {this.props.run.note}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DataRow;