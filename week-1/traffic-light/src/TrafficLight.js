import React from 'react'

function TrafficLight({LightColors}) {
    return (
        <div>
            <div className="TrafficLight" style={{backgroundColor:LightColors}}></div>
        </div>
    )
}

export default TrafficLight