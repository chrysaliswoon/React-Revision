import React from 'react'

function TrafficLight({LightColors, LightStatus, setColor}) {
    return (
        <div>
            <div className="TrafficLight" 
            style={{backgroundColor:LightColors === LightStatus? LightColors: 'grey'}}
            onClick={()=> setColor(LightColors)}
            >
            </div>
        </div>
    )
}

export default TrafficLight