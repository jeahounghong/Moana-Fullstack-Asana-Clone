import React from "react";
import { Link } from "react-router-dom";

class AppNavbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            titleDropdownShow: false,
            profileDropdownShow: false,
        }
        this.project = -1;
        this.team = -1;

        console.log(props);

        this.navbarTitle = this.navbarTitle.bind(this)
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.toggleTitleDropdown = this.toggleTitleDropdown.bind(this);
        this.dropdown = this.dropdown.bind(this);
        this.profileDropdown = this.profileDropdown.bind(this);
        document.addEventListener("click", (e) => {
            if (this.state.titleDropdownShow){
                if (e.target.className.indexOf("keep-dropdown-open") < 0){
                    this.toggleTitleDropdown()
                }
            }

            if (this.state.profileDropdownShow){
                if (e.target.className.indexOf("profile-dropdown-show") < 0){
                    this.setState({profileDropdownShow: false})
                }
            }
        })
    }

    componentDidMount(){
        
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

                    if (this.team !== id){
                        this.setState({titleDropdownShow: false})
                        // console.log(this.state.toggleDropdownShow)
                    }

                    this.team = id;
                    this.project = -1;
                    return this.props.teams[id] ? this.props.teams[id].name : "";

                } else if (this.props.url.substring(0,9) === "/projects"){
                    let id = this.props.url.substring(10);
                    let idx = id.indexOf("/");
                    id = parseInt(id.substring(0,idx));
                    if (this.project !== id){
                        this.setState({titleDropdownShow: false})
                    }
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
                <div onClick={() => {
                    this.props.showUpdateProjectForm(this.project);
                    this.toggleTitleDropdown();
                }}>Edit project details</div>
                <div className="delete" onClick={ () => {
                    this.props.deleteProject(this.project);
                    this.props.history.push("/home");
                    this.toggleTitleDropdown();
                }}>
                Delete project
                </div>
            </div>)
        } else if (this.team >= 0) {
            return (<div className="drop-down-menu">
                <div onClick={() => {
                    this.props.showUpdateTeamForm(this.team);
                    this.toggleTitleDropdown();
                }}>Edit team details</div>
                <div className="delete" 
                        onClick={() => {this.props.deleteTeam(this.team); 
                                    this.props.history.push("/home");
                                    this.toggleTitleDropdown();
                        }}>
                        
                Delete team
                </div>
            </div>)
        } else {
            return ""
        }
    }

    profileDropdown(){
        if (this.props.currentUser){
            return <div className="backdrop">
                <div>
                    Logged in as: 
                </div>
                <div className="username-bold">
                    {this.props.currentUser.username}
                </div>
                <div className="logout-button profile-dropdown-show" onClick={this.props.logoutUser}>
                    Log Out
                </div>
            </div>
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
                    {(this.props.url !== "/home" && this.props.url !== "/tasks" & this.props.url !== "/inbox") ? 
                    <div className="drop-down">
                        <i onClick={this.toggleTitleDropdown} className="fa-solid fa-chevron-down keep-dropdown-open"></i>
                    </div>
                    : ""}
                </p>
            </div>

            <div className="app-navbar-right">
                {/* <div className="add-icon">
                    <i className="fa-solid fa-plus"></i>
                </div> */}
                <div className="circle-name profile-dropdown-show" onClick={() => this.setState({profileDropdownShow: !this.state.profileDropdownShow})}>
                    {this.props.currentUser ? this.props.currentUser.firstName[0].toUpperCase() + this.props.currentUser.lastName[0].toUpperCase() : ""}
                </div>
                {/* <p>Welcome, {this.props.currentUser.firstName[0]}{this.props.currentUser.lastName[0]}</p> */}
                {/* <button onClick={() => this.props.logoutUser(this.props.currentUser.id)}>Logout</button> */}
            </div>

            <div className="drop-down-menu-container">
                    {this.state.titleDropdownShow ? this.dropdown() : ""}
            </div>

            <div className="profile-dropdown profile-dropdown-show">
                {this.state.profileDropdownShow ? this.profileDropdown() : ""}
            </div>


        </div>
    )}
}

export default AppNavbar

