import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class GraphDistance extends Component {
    getDates = () => {
        let runDates = []
        this.props.runData.map(run => {
            if(run.user_id === 1){
                runDates.push(run.date)
            }
        })
        return runDates;
    }

    getDistances = () => {
        let runDistances = []
        this.props.runData.map(run => {
            if(run.user_id === 1){
                runDistances.push(run.distance)
            }
        })
        return runDistances;
    }
    render(){
        return (
            <div className="graph-distance">
                <h2 className="graph-title">Graph of Distance</h2>
                <Line 
                    responsive= {true}
                    data={{
                        labels: this.getDates(),
                        datasets: [{
                            label: 'Distance (miles)',
                            data: this.getDistances(),
                            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                            borderColor: ['rgba(54, 162, 235, 1)']
                        }]
                    }}
                    height={700}
                    width={1400}

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
                                left: 100,
                                right: 100,
                                top: 0,
                                bottom: 20
                            },


                        }
                    }}
                />
            </div>
        );
    }
}
        
 
export default GraphDistance;