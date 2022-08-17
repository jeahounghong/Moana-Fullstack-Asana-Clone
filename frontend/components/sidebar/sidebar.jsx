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
                <img className="sidebar-logo" src={window.darklogo} alt="" />
                <ul className="sidebar-list">
                    <Link to="/home"><i class="fa-solid fa-house"></i> Home</Link>
                    <Link to="/tasks"><i class="fa-regular fa-circle-check"></i> My Tasks</Link>
                    <Link id="sidebar-inbox" to="/inbox"><i class="fa-solid fa-inbox"></i> Inbox</Link>
                    <div className="sidebar-scroll">
                        <div> 
                            <div id="my-teams">
                                My Teams
                            </div>
                            <ul>
                                {Object.values(this.props.teams).map((team) => (
                                        <li key={team.id}>

                                            <TeamSidebarItemContainer team={team}/>
                                        </li>
                                ))}
                            </ul>
                        </div>
                        <div onClick={this.props.showNewTeamForm}>Add Team+</div>
                    </div>
                </ul>
            </div>
        )
    }
}
export default Sidebar;