import React from "react";
import NavBar from "./nav_bar/nav_bar";
import { Link } from "react-router-dom";

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){return(
        <div className="main">
            <NavBar/>
            <div id="phrase">
                <div>
                    Work faster,
                </div>
                <div>
                    Vacation sooner.
                </div>
                <div class="underline">
                </div>

                <div id="main-page-description">
                From the small stuff to the big picture, Moana organizes work so teams know what to do, why it matters, and how to get it done.
                </div>

                <div className="main-buttons">
                    <Link className="get-startedn" to="/login">Get Started</Link>
                    <Link className="demo" to="/login">Demo</Link>
                </div>
            </div>

            <div id="hawaii-1">
                <img src={window.hawaii} alt="" />
            </div>
            <div id="beach">
                <img src={window.beach} alt="" />
            </div>
        </div>
    )}
}

export default Main;