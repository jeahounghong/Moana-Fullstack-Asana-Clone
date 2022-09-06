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
                let rights = document.getElementsByClassName("right-most")
                for(let i = 0; i < rights.length; i ++){
                    rights[i].style.marginRight = "250px";
                }
                // document.getElementById("main-content").style.paddingLeft = "250px";
            } else {
                console.log("close")
                document.getElementById("sidebar").style.width = "0";
                document.getElementById("main-content").style.marginLeft= "0";
                let rights = document.getElementsByClassName("right-most")
                for(let i = 0; i < rights.length; i ++){
                    rights[i].style.marginRight = "0px";
                }
                // document.getElementById("main-content").style.paddingLeft= "0";
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
                        <div className="add-team-container">
                            <div className="add-team-button" onClick={this.props.showNewTeamForm}>Add Team+</div>
                        </div>
                    </div>

                </ul>
                <div className="sidebar-bottom">
                    <div className="sidebar-logout">
                        <div className="sidebar-logout-button" onClick={() => this.props.logoutUser()}>
                            Sign Out
                        </div>
                        <div className="sidebar-profile">
                            Made by: David (Jeahoung) Hong
                        </div>
                    </div>

                    <div className="sidebar-profile-icons">
                        <a href="https://www.linkedin.com/in/david-jeahoung-hong-7ab00b134/"><i class="fa-brands fa-linkedin icon"></i></a>
                        <a href="https://github.com/jeahounghong"><i class="fa-brands fa-github icon"></i></a>
                        <a href="https://angel.co/u/david-jeahoung-hong"><i class="fa-brands fa-angellist icon"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Sidebar;