import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class GraphPace extends Component {
    getDates = () => {
        let runDates = []
        this.props.runData.map(run => {
            if(run.user_id == this.props.match.params.userId){
                runDates.push(run.date.substr(4, 11))
            }
        })
        return runDates;
    }

    // creates an array containing the user's pace for each run as strings
    calculatePaceStr = () => {
        let usersTime = []
        let usersDistance = []
        let paceString = []
        let arrCounter = 0;
        this.props.runData.map(run => {
            if(run.user_id == this.props.match.params.userId){
                usersTime.push(run.time)
                usersDistance.push(run.distance)
            }
            while(arrCounter < usersTime.length){
                var date = new Date(0);
                date.setSeconds(usersTime[arrCounter]/usersDistance[arrCounter]);
                var timeString = date.toISOString().substr(14, 5);
                paceString.push(timeString)
                arrCounter ++
            }
        })

        return paceString;
    }

    // creates an array containing the user's raw numerical pace for each run in minutes/mile
    calculatePace = () => {
        let usersTime = []
        let usersDistance = []
        let arrCounter = 0;
        let rawPace = [];
        
        this.props.runData.map(run => {
            if(run.user_id == this.props.match.params.userId){
                usersTime.push(run.time)
                usersDistance.push(run.distance)
            }
            while(arrCounter < usersTime.length){
                rawPace.push((usersTime[arrCounter]/60)/usersDistance[arrCounter])
                arrCounter ++
            }
        })
        
        return rawPace;
        
    }
    
    render() { 
        return (
            <div className="graph-pace">
                <h2 className="graph-title heading">Graph of Average Pace</h2>
                <Line 
                    responsive= {true}
                    data={{
                        labels: this.getDates(),
                        datasets: [{
                            label: 'Pace per mile',
                            data: this.calculatePace(),
                            dataStr: this.calculatePaceStr(),
                            backgroundColor: ['rgba(40, 236, 33, 0.1)'],
                            borderColor: ['rgba(40, 236, 33, 1)']
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
                        },
                        tooltips: {
                            callbacks: {
                                title: function(tooltipItem, data) {
                                  return data['labels'][tooltipItem[0]['index']];
                                },
                                label: function(tooltipItem, data) {
                                  return data['datasets'][0]['dataStr'][tooltipItem['index']];
                                }
                              },
                        }
                    }}
                />
            </div>
        );
    }
}
 
export default GraphPace;