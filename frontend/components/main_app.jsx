import React from "react";
import { Route } from "react-router-dom";
import {ProtectedRoute } from "../util/route_util";
import SidebarContainer from "./sidebar/sidebar_container";
import AppNavbarContainer from "./app_navbar/app_navbar_container";
import ModalContainer from "./modal/modal";
import { TeamContainer } from "./teams/team_container";
import ProjectContainer from "../projects/project_container";
import TaskShowContainer from "./tasks/task_show_container";
import HomeContainer from "./home/home_container";
import MyTasksContainer from "./my_tasks/my_tasks_container";

const upgradeToPro = () => {
    return <div className="pro right-most">
        <a href="https://www.linkedin.com/in/david-jeahoung-hong-7ab00b134/">
            <p>Upgrade to Pro!</p>
        </a>
        <video autoPlay muted loop>
            <source src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/949edc4d27496bb98db9a9a584adf44437613b90/dashboard_empty_state.mp4"
            type="video/mp4" autoplay/>
        </video>
    </div>
}

class MainApp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div id="app-logged-in">
            <ProtectedRoute path="/" component={SidebarContainer}/>
            <div id="main-content">
                <ProtectedRoute path="/" component={ModalContainer}/>
                <ProtectedRoute path="/" component={AppNavbarContainer}/>
                <ProtectedRoute path="/" component={TaskShowContainer}/>
                <ProtectedRoute path="/home" component={HomeContainer}/>
                <ProtectedRoute path="/inbox" component={upgradeToPro}/>
                <ProtectedRoute path="/tasks" component={MyTasksContainer}/>
                <ProtectedRoute path="/teams/:team_id/" component={TeamContainer}/>
                <ProtectedRoute path="/projects/:project_id/" component={ProjectContainer}/>
            
            </div>
        </div>)
    }
}

export default MainApp;