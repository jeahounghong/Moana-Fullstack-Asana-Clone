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
        <div className="space-between">
            <div></div>
        <div className="main">    
            <div className="main-presentation">
            <NavBar {...this.props}/>
                <div className="left">
                    <div id="top-phrase">
                        Work faster,
                    </div>
                    <div id="bottom-phrase">
                        Vacation sooner.
                    </div>
                    <div className="underline"></div>
                    <div id="main-page-description">
                    From the small stuff to the big picture, Moana organizes work so teams know what to do, why it matters, and how to get it done.
                    </div>
                    <div className="main-buttons">
                        <Link className="get-started" to="/login">Get Started</Link>
                        <a className="demo" onClick={() => this.props.loginUser({username: "DemoDavid", password: "password"})}>Demo</a>
                    </div>
                </div>
                <div className="right">
                    <div id="hawaii-1">
                        <img src="https://i.pinimg.com/736x/5a/33/7f/5a337f64fcca094439c4cfceeb5d04cf.jpg" alt="" />
                    </div>
                    <div id="horseshoe">
                        <img src="https://www.outsideonline.com/wp-content/uploads/2018/03/22/horseshoe-bend-iconic_s.jpg" alt="" />
                    </div>
                    .
                </div>
                
            </div>
            <div className="companies">
                Loved by more than a million teams in 190 countries
            </div>
            <img src={window.companies} alt="companies" className="company-images"/>
            <footer>
                Made by David (Jeahoung) Hong
                <div className="personal-links">
                    <a href="https://www.linkedin.com/in/david-jeahoung-hong-7ab00b134/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/jeahounghong"><i className="fa-brands fa-github"></i></a>
                    <a href="https://angel.co/u/david-jeahoung-hong"><i className="fa-brands fa-angellist"></i></a>
                </div>
            </footer>
        </div>
        <div></div>
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