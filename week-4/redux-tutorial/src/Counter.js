import React, {useState} from 'react'
import {connect} from 'react-redux'

function Counter(props) {
    console.log('props', props)
    
    return (
        <section>
            <h2>Count: {props.count}</h2>
            <button onClick={() =>{dispatchEvent({type: "INCREMENT"})}}
        </section>
    )
}