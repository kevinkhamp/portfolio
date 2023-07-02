import React from "react";
import './experience.css'

const Experience = () => {
    return (
        <div className="inline-flex p-1 mt-8 justify-end align-end bg-neutral-800">
            
            <div className="flex-col p-1 m-3 shadow-md justify-end text-center items-center rounded-lg bg-neutral-700">
                <p>Experienced in:</p>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>DevOps & Agile Development</li>
                    <li>Node</li>
                    <li>Express & Apollo</li>
                    <li>SQL, NoQL, GQL, & MongoDB</li>
                    <li>Handlebars & React</li>
                </ul>
            </div>
        </div>
    )
}

export default Experience