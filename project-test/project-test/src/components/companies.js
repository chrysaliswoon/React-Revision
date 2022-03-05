import React from 'react'
import jobExperience from './data'

export default function Companies() {
    let experiences = jobExperience()

    function handleClick(e) {
        e.preventDefault()
        console.log(experiences)
    }

    return (
        <div style={{display: 'flex'}}>
        <nav style={{
            borderRight: 'solid 1px',
            padding: '1rem'
        }}
        >
            {experiences.map((experience) => (
                <li key = {experience.id}>
                    <a onClick={handleClick} 
                    style={{cursor: 'pointer'}}
                    > 
                        {experience.company}
                    </a>
                </li>
            ))}
        </nav>
    </div>
    )
}