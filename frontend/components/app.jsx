import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/home";
import SignupFormContainer from "./session_forms/signup_form_container";
import LoginFormContainer from "./session_forms/login_form_container";
const App = () => (
    <div className="app">
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={SignupFormContainer}/>
        <Route path="/login" component={LoginFormContainer}/>
    </div>
)

export default App;