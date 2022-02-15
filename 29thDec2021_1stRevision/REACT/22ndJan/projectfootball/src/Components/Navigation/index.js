import React from "react";
import { Link } from "react-router-dom";
import './index.css'
export default function Navigation(){
    return(
        <React.Fragment>
            <ul>
                <li><Link className="link"to="/">Home</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
                <li><Link className="link" to="/players">Players</Link></li>
                <li><Link className="link" to="/services">Services</Link></li>
            </ul>
        </React.Fragment>
    )
}