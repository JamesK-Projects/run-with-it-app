import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class GraphPace extends Component {
    calculatePace = () => {
        let usersTime = []
        let usersDistance = []
        let usersPace = []
        let arrCounter = 0;
        
        this.props.runData.map(run => {
            if(run.user_id === 1){
                usersTime.push(run.time)
                usersDistance.push(run.distance)
            }
        })
        console.log(usersTime, usersDistance)
        while(arrCounter < usersTime.length){
            usersPace.push(
                `${Math.floor(usersTime[arrCounter]/60)}:${Math.round(usersTime[arrCounter]%60)}`
            )
            arrCounter ++
        }
        console.log(usersPace)

    }
    
    render() { 
        this.calculatePace()
        return (
            <div className="graph-pace">
                <Line 
                    responsive= {true}
                    data={{
                        labels:['03/03/2021', '03/05/2021', '03/08/2021'],
                        datasets: [{
                            label: 'Distance (miles)',
                            data: [3, 2, 4.5],
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
                                left: 10,
                                right: 10,
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
 
export default GraphPace;