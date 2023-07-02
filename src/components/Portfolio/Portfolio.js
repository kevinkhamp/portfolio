import React from "react";
import './portfolio.css'
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Github from "../Github/Github";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience"
import Projects from "../Projects/Projects"
import Header from "../Header/Header"

const Portfolio = () => {
    return (
        <>
            <div className="container">
            {/* <Navbar /> */}
            <Header />
            <About />
            <div className="container flex space-x-8 justify-center">
                <Github />
                <Experience />
                <Projects />
            </div>
            <Contact />
            </div>
        </>
    )
}

export default Portfolio