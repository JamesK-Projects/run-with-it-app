import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class GraphDistance extends Component {
    getDates = () => {
        let runDates = []
        this.props.runData.map(run => {
            if(run.user_id == this.props.match.params.userId){
                runDates.push(run.date.substr(4, 11))
            }
        })
        return runDates;
    }

    getDistances = () => {
        let runDistances = []
        this.props.runData.map(run => {
            if(run.user_id == this.props.match.params.userId){
                runDistances.push(run.distance)
            }
        })
        return runDistances;
    }
    render(){
        return (
            <div className="graph-distance">
                <h2 className="graph-title heading">Graph of Distance</h2>
                <Line 
                    responsive= {true}
                    data={{
                        labels: this.getDates(),
                        datasets: [{
                            label: 'Distance (miles)',
                            data: this.getDistances(),
                            backgroundColor: ['rgb(52, 77, 158, 0.1)'],
                            borderColor: ['rgb(52, 77, 158, 1)']
                        }]
                    }}
                    height={500}
                    width={900}

                    options = {{
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },
                            ],
                        },
                        layout: {
                            padding: {
                                left: 10,
                                right: 20,
                                top: 0,
                                bottom: 0
                            },


                        }
                    }}
                />
            </div>
        );
    }
}
        
 
export default GraphDistance;