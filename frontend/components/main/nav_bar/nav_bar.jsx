import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => (
    <div className="nav-bar">
        <div id="nav-bar-logo">Moana</div>
        <div className="session-buttons">
            <Link className="session-button" to="/signup">Sign Up</Link>
            <Link className="session-button" to="/login">Log In</Link>
        </div>
    </div>
)

export default NavBar;