import React from "react";
import { Link } from "react-router-dom";
import TeamSidebarItemContainer from "./team_sidebar_item_container";

class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showSidebar: this.props.showSidebar
        }
    }

    componentDidMount(){
        this.props.fetchUserTeams(this.props.currentUser);
        this.props.fetchUserProjects(this.props.currentUser);
    }

    componentDidUpdate(){
        if (this.state.showSidebar !== this.props.showSidebar){

            this.state.showSidebar = this.props.showSidebar
            
            if (this.state.showSidebar){
                document.getElementById("sidebar").style.width = "250px";
                document.getElementById("main-content").style.marginLeft = "250px";
            } else {
                console.log("close")
                document.getElementById("sidebar").style.width = "0";
                document.getElementById("main-content").style.marginLeft= "0";
            }
        }
    }

    render(){
        return(
            <div id="sidebar">
                <h3>SideBar</h3>
                <ul className="sidebar-list">
                    <Link to="/home">Home</Link>
                    <Link to="/tasks">My Tasks</Link>
                    <Link to="/inbox">Inbox</Link>
                    <div> My Teams
                        <ul>
                            {Object.values(this.props.teams).map((team) => (
                                    <li key={team.id}>

                                        <TeamSidebarItemContainer team={team}/>
                                    </li>
                            ))}
                        </ul>
                    </div>
                    <div onClick={this.props.showNewTeamForm}>Add Team+</div>
                </ul>
            </div>
        )
    }
}
export default Sidebar;