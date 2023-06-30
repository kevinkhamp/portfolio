import React from "react";
import './about.css'

const About = () => {
    return(
        <div className="flex pr-9 justify-end align-end">
            <div className="flex-col p-1 shadow-md justify-end text-center items-center">
                <p>My name is Kevin Khamphounvong. I am a software developer.</p>
                <p>Graduated from Kennesaw State University with a B.S. in Media & Entertainment in 2022.</p>
                <p>Recently, I also attended and graduated from Georgia Tech's Full-Stack Coding Bootcamp where I learned:</p>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>DevOps & Agile Development</li>
                    <li></li>
                    <li>Node</li>
                    <li>Express & Apollo</li>
                    <li>SQL, NoQL, GQL, & MongoDB</li>
                    <li>Handlebars & React</li>
                </ul>
            </div>
        </div>
    )
}

export default About