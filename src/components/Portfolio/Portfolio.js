import React from "react";
import './portfolio.css'
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Github from "../Github/Github";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience"

const Portfolio = () => {
    return (
        <>
            <div className="container">
            {/* <Navbar /> */}
            <About />
            <div className="inline-flex space-x-8 justify-center items-center">
                <Github />
                <Experience />
            </div>
            <Contact />
            </div>
        </>
    )
}

export default Portfolio