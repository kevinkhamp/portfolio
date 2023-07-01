import React from "react";
import './portfolio.css'
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Github from "../Github/Github";
import Contact from "../Contact/Contact";

const Portfolio = () => {
    return (
        <>
            <div className="container">
            {/* <Navbar /> */}
            <About />
            <Github />
            <Contact />
            </div>
        </>
    )
}

export default Portfolio