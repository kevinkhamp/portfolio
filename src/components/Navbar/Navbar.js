import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    return (
        <div className='flex'>
            <div className="container flex bg-zinc-900 absolute inset-y-24 left-0 w-2/12 border-2 border-stone-200">
                <div className="nav-NavLinks flex-col text-stone-200 text-center flex">
                        <NavLink to='/' className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group m-2 mt-4">
                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-stone-200 opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-stone-200 opacity-100 group-hover:-translate-x-8"></span>
                        <span className="relative w-full text-stone-200 transition-colors duration-200 ease-in-out group-hover:text-gray-900">About</span>
                        <span className="absolute inset-0 border-2 border-stone-200 rounded-full"></span>
                        </NavLink>
                        <NavLink to='/' className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group m-2 mt-4">
                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-stone-200 opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-stone-200 opacity-100 group-hover:-translate-x-8"></span>
                        <span className="relative w-full text-stone-200 transition-colors duration-200 ease-in-out group-hover:text-gray-900">Experience</span>
                        <span className="absolute inset-0 border-2 border-stone-200 rounded-full"></span>
                        </NavLink>
                        <NavLink to='/' className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group m-2 mt-4">
                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-stone-200 opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-stone-200 opacity-100 group-hover:-translate-x-8"></span>
                        <span className="relative w-full text-stone-200 transition-colors duration-200 ease-in-out group-hover:text-gray-900">Contact</span>
                        <span className="absolute inset-0 border-2 border-stone-200 rounded-full"></span>
                        </NavLink>
                        <NavLink to='/' className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group m-2 mt-4">
                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-stone-200 opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-stone-200 opacity-100 group-hover:-translate-x-8"></span>
                        <span className="relative w-full text-stone-200 transition-colors duration-200 ease-in-out group-hover:text-gray-900">Hobbies & Interests</span>
                        <span className="absolute inset-0 border-2 border-stone-200 rounded-full"></span>
                        </NavLink>
                        
                </div>
            </div>
        </div>
    )
}

export default Navbar