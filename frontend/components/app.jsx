import React from "react";
import { Route } from "react-router-dom";
import Main from "./main/main";
import SignupFormContainer from "./session_forms/signup_form_container";
import LoginFormContainer from "./session_forms/login_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomeContainer from "./home/home_container";
import SidebarContainer from "./sidebar/sidebar_container";

const App = () => (
    <div className="app">
        <AuthRoute exact path="/" component={Main}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <ProtectedRoute path="/" component={SidebarContainer}/>
        <ProtectedRoute path="/home" component={HomeContainer}/>
    </div>
)

export default App;