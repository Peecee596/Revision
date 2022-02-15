import React from "react";

import { Link } from "react-router-dom";
import './index.css'
function Navigation(){
    return(
        <div>
            <ul className="header">
                <li ><Link to ="/"className="link">Home</Link></li>
                <li><Link to="/about"className="link">About</Link></li>
                <li><Link to="/players"className="link">Players</Link></li>
            </ul>
        </div>
    )
}
export default Navigation;