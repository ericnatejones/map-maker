import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Map Maker</Link>
            <Link to="/config">Config</Link>
        </div>
    )
}
