import React from "react";
import { Route } from "react-router-dom";
import {ProtectedRoute } from "../util/route_util";
import SidebarContainer from "./sidebar/sidebar_container";
import AppNavbarContainer from "./app_navbar/app_navbar_container";
import ModalContainer from "./modal/modal";
import { TeamContainer } from "./teams/team_container";
import ProjectContainer from "../projects/project_container";

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
                <ProtectedRoute path="/teams/:team_id/" component={TeamContainer}/>
                <ProtectedRoute path="/projects/:project_id/" component={ProjectContainer}/>
            </div>
        </div>)
    }
}

export default MainApp;