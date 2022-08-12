import React from "react";
import NavBar from "./nav_bar/nav_bar";

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){return(
        <div className="main">
            <NavBar/>
        </div>
    )}
}

export default Main;