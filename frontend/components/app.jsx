import React from "react";
import { Route } from "react-router-dom";
import Main from "./main/main";
import SignupFormContainer from "./session_forms/signup_form_container";
import LoginFormContainer from "./session_forms/login_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomeContainer from "./home/home_container";
import SidebarContainer from "./sidebar/sidebar_container";
import ModalContainer from "./modal/modal";
import AppNavbarContainer from "./app_navbar/app_navbar_container";
import { TeamContainer } from "./teams/team_container";
import ProjectContainer from "../projects/project_container";
import { Switch } from "react-router-dom";

const App = () => (
    <div className="app">
            <Switch>
                <AuthRoute exact path="/" component={Main}/>
                <AuthRoute exact path="/signup" component={SignupFormContainer}/>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
            </Switch>
            <div id="app-logged-in">
                <ProtectedRoute path="/" component={SidebarContainer}/>
                <div id="main-content">
                    <ProtectedRoute path="/" component={ModalContainer}/>
                    <ProtectedRoute path="/" component={AppNavbarContainer}/>
                    <ProtectedRoute path="/teams/:team_id/show" component={TeamContainer}/>
                    <ProtectedRoute path="/projects/:project_id/" component={ProjectContainer}/>
                </div>
            </div>
    </div>
)

export default App;