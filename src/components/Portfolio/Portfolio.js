import React from "react";
import './portfolio.css'
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";

const Portfolio = () => {
    return (
        <>
            {/* <Navbar /> */}
            <About />
            <Experience />
            <Contact />
            </>
    )
}

export default Portfolio