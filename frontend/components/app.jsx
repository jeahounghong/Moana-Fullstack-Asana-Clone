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
import MainApp from "./main_app";

const App = () => (
    <div className="app">
            <Switch>
                <AuthRoute exact path="/signup" component={SignupFormContainer}/>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path="/" component={Main}/>
                <ProtectedRoute path="/" component={MainApp}/>
            </Switch>
    </div>
)



export default App;