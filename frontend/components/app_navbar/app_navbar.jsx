import React from "react";

class AppNavbar extends React.Component{

    constructor(props){
        super(props);
        this.navbarTitle = this.navbarTitle.bind(this)
        this.toggleSidebar = this.toggleSidebar.bind(this);
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
                    console.log(id)
                    console.log(this.props.teams)
                    return this.props.teams[id] ? this.props.teams[id].name : "";
                } else if (this.props.url.substring(0,9) === "/projects"){

                    return "PROJECT PAGE"
                } else {
                    return this.props.url;
                }
        }
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
                <p>{ this.navbarTitle()}</p>
            </div>

            <div className="app-navbar-right">
                <p>Welcome, {this.props.currentUser.firstName}</p>
                <i className="fa-solid fa-plus"></i>
                <button onClick={() => this.props.logoutUser(this.props.currentUser.id)}>Logout</button>
            </div>
        </div>
    )}
}

export default AppNavbar

