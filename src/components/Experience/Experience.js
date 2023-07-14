import React from "react";
import './experience.css'

const Experience = () => {
    return (
        <div className="inline-flex p-1 mt-8 justify-end align-end rounded-md bg-neutral-800">
            
            <div className="flex-col p-1 m-3 shadow-md justify-end text-center items-center rounded-lg bg-neutral-700">
                <p>Experienced in:</p>
                <ul>
                    <li><a href="https://github.com/shimpfierie?tab=repositories&amp;q=&amp;language=html" target="_blank" rel="noopener"><i class="devicon-react-original colored"></i> HTML</a>
                    , <a href="https://github.com/shimpfierie?tab=repositories&amp;q=&amp;language=CSS" target="_blank" rel="noopener"><i class="devicon-react-original colored"></i> CSS</a>, 
                    <a href="https://github.com/shimpfierie?tab=repositories&amp;q=&amp;language=javascript" target="_blank" rel="noopener"><i class="devicon-react-original colored"></i> JavaScript</a></li>
                    <li><a href="https://github.com/shimpfierie?tab=repositories&amp;q=&amp;language=javascript" target="_blank" rel="noopener"><i class="devicon-react-original colored"></i> Node.js</a></li>
                    <li>Express & Apollo</li>
                    <li>SQL, NoQL, GQL, & MongoDB</li>
                    <li><a href="https://github.com/shimpfierie?tab=repositories&amp;q=&amp;language=handlebars" target="_blank" rel="noopener"><i class="devicon-react-original colored"></i> Handlebars</a> & 
                    <a href="https://github.com/shimpfierie?tab=repositories&amp;q=&amp;language=javascript" target="_blank" rel="noopener"><i class="devicon-react-original colored"></i> React</a>
                    </li>
                    <li>Java</li>
                    <li>C</li>
                </ul>
            </div>
        </div>
    )
}

export default Experience