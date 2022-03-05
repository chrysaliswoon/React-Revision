import React from 'react'
import jobExperience from './data'

export default function Description() {
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
                <div key = {experience.id}>
                    <a onClick={handleClick} 
                    style={{cursor: 'pointer'}}
                    > 
                        {experience.jobTitle} | {" "} {experience.company}
                        <br />
                        {experience.duration} 
                        <li>{experience.point1}</li>
                        <li>{experience.point2}</li>
                        <li>{experience.point3}</li>
                    </a>
                </div>
            ))}
        </nav>
    </div>
    )
}