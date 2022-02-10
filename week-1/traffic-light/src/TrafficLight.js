import React from 'react'

function TrafficLight({LightColors, LightStatus}) {
    return (
        <div>
            <div className="TrafficLight" style={{backgroundColor:LightColors === LightStatus? LightColors: 'grey'}}></div>
        </div>
    )
}

export default TrafficLight