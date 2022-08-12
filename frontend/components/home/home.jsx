import React from "react";
import NavBar from "./nav_bar/nav_bar";

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){return(
        <div>
            <NavBar/>
        </div>
    )}
}

export default Home;