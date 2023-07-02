import React from "react";
import { useEffect } from "react";

const Projects = () => {

    useEffect(() => {
        fetch('https://api.github.com/users/shimpfierie')
        .then((res) => res.json())
        .then(
            (result) => {
                console.log(result)
            },
            (error) => {
                console.log(error)
            }
        )
    }, [])

    return (
        <div className="inline-flex p-1 mt-8 justify-end align-end rounded-md bg-neutral-800">
            
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

export default Projects