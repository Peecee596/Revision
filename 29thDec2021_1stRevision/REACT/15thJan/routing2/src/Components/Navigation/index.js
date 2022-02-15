import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(){
    return(
        <React.Fragment>
            <Link to='/'>Home</Link>
            <Link to="/about">About</Link>
            <Link to='/contact'>Contact</Link>
        </React.Fragment>
    )
}