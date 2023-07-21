import React from "react";
import './contact.css'


const Contact = () => {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1
            }}
        />
    );


    return (
        <div className="p-1 mt-4 justify-end align-end rounded-md border-red-700 bg-neutral-800">
        <div className="flex-col p-1 m-3 shadow-md justify-end text-center items-center rounded-lg bg-neutral-700">
        <ColoredLine color="red" />
            <h1 className="text-xl text-neutral-900">Contact</h1>
            <ColoredLine color="red" />
            <div className="col">
                <ul>
                    <li><a href="https://www.linkedin.com/in/kevin-khamp/" target="_blank" rel="noopener">LinkedIn</a></li>
                    <li><a href="https://github.com/kevinkhamp" target="_blank" rel="noopener">Github</a></li>
                    <li><a onClick={() => window.location = 'mailto:khampkevin@gmail.com'}>Email</a></li>
                </ul>
            </div>
            <ColoredLine color="red" />
        </div>
    </div>
    )
}

export default Contact