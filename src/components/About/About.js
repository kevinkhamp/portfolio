import React from "react";
import './about.css'

const About = () => {
    return(
        <div className="p-1 justify-end align-end bg-neutral-800">
            <div className="flex-col p-1 m-3 shadow-md justify-end text-center items-center rounded-lg bg-neutral-700">
                <p>My name is Kevin Khamphounvong. I am a software developer.</p>
                <p>Graduated from Kennesaw State University with a B.S. in Media & Entertainment in 2022.</p>
                <p>I also attended and graduated from Georgia Tech's Full-Stack Coding Bootcamp.</p>
            </div>
        </div>
    )
}

export default About