import React from "react";
import { Link } from "react-router-dom";

class AppNavbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            titleDropdownShow: false,
        }
        this.project = -1;
        this.team = -1;

        console.log(props);

        this.navbarTitle = this.navbarTitle.bind(this)
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.toggleTitleDropdown = this.toggleTitleDropdown.bind(this);
        this.dropdown = this.dropdown.bind(this);
    }

    navbarTitle(){
        switch (this.props.url){
            case "/home":
                return "Home Page"
            case "/inbox":
                return "Inbox"
            case "/tasks":
                return "My Tasks"
            default:
                // Ideally I would add regex conditions for /teams/:team_id as well
                if (this.props.url.substring(0,6) === "/teams"){
                    let id = parseInt(this.props.url.substring(7))
                    this.team = id;
                    this.project = -1;
                    return this.props.teams[id] ? this.props.teams[id].name : "";
                } else if (this.props.url.substring(0,9) === "/projects"){
                    let id = this.props.url.substring(10);
                    let idx = id.indexOf("/");
                    id = parseInt(id.substring(0,idx));
                    this.project = id;
                    this.team = -1;
                    return this.props.projects[id] ? this.props.projects[id].title : "";
                } else {
                    return this.props.url;
                }
        }
    }

    dropdown(){
        if (this.project >= 0) {
            return (<div className="drop-down-menu">
                <div>Edit project details</div>
                <div className="delete">Delete project details</div>
            </div>)
        } else if (this.team >= 0) {
            return (<div className="drop-down-menu">
                <div>Edit team details</div>
                <div className="delete" 
                        onClick={() => {this.props.deleteTeam(this.team); 
                                    this.props.history.push("/home");
                                    this.toggleTitleDropdown();
                        }}>
                        
                    Delete team details
                    </div>
            </div>)
        } else {
            return ""
        }
    }

    toggleTitleDropdown(){
        console.log("toggle title dropdow")
        this.setState({titleDropdownShow: !this.state.titleDropdownShow});
    }

    toggleSidebar(){
        if (this.props.showSidebar){
            this.props.closeSidebar();
        } else {
            this.props.openSidebar();
        }
    }

    render(){return(
        <div className="app-navbar">
            <div className="app-navbar-title">
                <div className="toggle-sidebar" onClick={this.toggleSidebar}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <p>{ this.navbarTitle()}
                    <div className="drop-down">
                        <i onClick={this.toggleTitleDropdown} class="fa-solid fa-chevron-down"></i>
                    </div>
                </p>
            </div>

            <div className="app-navbar-right">
                <p>Welcome, {this.props.currentUser.firstName}</p>
                <i className="fa-solid fa-plus"></i>
                <button onClick={() => this.props.logoutUser(this.props.currentUser.id)}>Logout</button>
            </div>

            <div className="drop-down-menu-container">
                    {this.state.titleDropdownShow ? this.dropdown() : ""}
            </div>
        </div>
    )}
}

export default AppNavbar

