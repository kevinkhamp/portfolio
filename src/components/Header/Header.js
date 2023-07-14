import React from "react";
import './header.css'

const Header = () => {
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
        <div className="p-1 justify-end align-end rounded-t-md border-red-700 bg-neutral-800">
            <div className="text-center border-2">
                <h1 className="text-2xl">I am Kevin Khamphounvong
                <ColoredLine color="red" />
                </h1>
            </div>
        </div>
    )
}

export default Header