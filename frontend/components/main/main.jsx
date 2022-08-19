import React from "react";
import NavBar from "./nav_bar/nav_bar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {loginUser } from "../../actions/session_actions";

class MainComponent extends React.Component{
    constructor(props){
        super(props);
    }



    render(){return(
        <div className="main">
            <NavBar {...this.props}/>
            <div id="phrase">
                <div>
                    Work faster,
                </div>
                <div>
                    Vacation sooner.
                </div>
                <div class="underline">
                </div>

                <div id="main-page-description">
                From the small stuff to the big picture, Moana organizes work so teams know what to do, why it matters, and how to get it done.
                </div>

                <div className="main-buttons">
                    <Link className="get-startedn" to="/login">Get Started</Link>
                    <a className="demo" onClick={() => this.props.loginUser({username: "DemoDavid", password: "password"})}>Demo</a>
                    {/* <Link className="demo" to="/login">Demo</Link> */}
                </div>
            </div>

            <div id="hawaii-1">
                <img src="https://i.pinimg.com/736x/5a/33/7f/5a337f64fcca094439c4cfceeb5d04cf.jpg" alt="" />
            </div>
            <div id="horseshoe">
                <img src="https://www.outsideonline.com/wp-content/uploads/2018/03/22/horseshoe-bend-iconic_s.jpg" alt="" />
            </div>
        </div>
    )}
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    loginUser: (user) => dispatch(loginUser(user))
})

const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent)
export default Main;