import React from "react";
import './about.css'

const About = () => {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1
            }}
        />
    );

    return(
        <div className="p-1 justify-end align-end rounded-md border-red-700 bg-neutral-800">
            <div className="flex-col p-1 m-3 shadow-md justify-end text-center items-center rounded-lg bg-neutral-700">
            <ColoredLine color="red" />
                <h1 className="text-xl text-neutral-900">About Me</h1>
                <ColoredLine color="red" />
                <p>I am a full-stack software developer with some knowledge of C and Java.</p>
                <p>Attended and graduated from Kennesaw State University with a B.S. in Media & Entertainment. While attending KSU, I consistently achieved the President's and Dean's List.</p>
                <p>I also attended and graduated from Georgia Tech's Full-Stack Coding Bootcamp. Not only was I studious, I helped my classmates debug their code.</p>
                <p>As an average human, I like to have fun! I want to try new and different methods and gimmicks in my products.</p>
                <ColoredLine color="red" />
                <h1 className="text-xl text-neutral-900">Hobbies & Interests</h1>
                <ColoredLine color="red" />
                <ul>
                    <li>I love to watch movies.</li>
                    <li>I have managed a gaming community for 5 years and started my own.</li>
                    <li>I make and edit videos on YouTube and do photography from time to time.</li>
                    <li>I .</li>
                </ul>
            </div>
        </div>
        
    )
}

export default About