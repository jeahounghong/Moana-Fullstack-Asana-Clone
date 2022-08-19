import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => (
    <div className="nav-bar">
        <div id="nav-bar-logo">
            <img src={window.logo} alt="Logo" />
        </div>
        <div id="gray-background"></div>
        
        <div className="session-buttons">
            <Link className="session-button" to="/login">Log In</Link>
            <a className="session-button" onClick={() => props.loginUser({username: "DemoDavid", password: "password"})}>Demo</a>
            {/* <Link className="session-button" to="/login">Demo</Link> */}
            <Link className="get-started" to="/signup">Get Started</Link>
        </div>
        
    </div>
)

export default NavBar;