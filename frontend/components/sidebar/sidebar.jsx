import React from "react";
import { Link } from "react-router-dom";
import NewTeamFormContainer from "./new_team_form_container";

class Sidebar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){return(
        <div className="sidebar">
            <h3>SideBar</h3>
            <ul className="sidebar-list">
                <Link>Home</Link>
                <Link>My Tasks</Link>
                <Link>Inbox</Link>
                <NewTeamFormContainer/>

            </ul>
        </div>
    )}
}
export default Sidebar;