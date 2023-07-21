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
        <div className="inline-flex p-1 mt-4 justify-end align-end rounded-md bg-neutral-800">
            
            <div className="flex-col p-1 m-3 shadow-md justify-end text-center items-center rounded-lg bg-neutral-700">
                <p>Projects:</p>
                <ul>
                    <li><a href="https://bitterbitter-205aa32f474c.herokuapp.com/" target="_blank" rel="noopener">Bitter</a></li>
                    <li><a href="https://paws-tive-c32df2c49a99.herokuapp.com/" target="_blank"  rel="noopener">Paws-itive Vibes</a></li>
                    <li><a href="https://github.com/kevinkhamp/super-team-proj" target="_blank"  rel="noopener">Super-Search(Repo Only)</a></li>
                    <li><a href="https://github.com/kevinkhamp/TindUwU" target="_blank" rel="noopener">TindUwU (Ongoing)</a></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Projects