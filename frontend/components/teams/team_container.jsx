import React from "react";
import { connect } from "react-redux";
import TeamShow from "./team_show";
import { fetchUserProjects } from "../../actions/project_actions";
import { updateTeam } from "../../actions/team_actions";
import { showAddTeamUserForm, showNewProjectForm } from "../../actions/ui_actions";
import { deleteSection, fetchProjectSections } from "../../actions/section_actions";
import {fetchUser} from "../../actions/user_actions";
import { Link } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
    team: state.entities.teams[ownProps.match.params.team_id],
    projects: state.entities.projects,
    currentUser: state.session.id,
    teamId: ownProps.match.params.team_id,
    users: state.entities.users,
    path: ownProps.location.pathname,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUserProjects: (userId) => dispatch(fetchUserProjects(userId)),
    showNewProjectForm: (teamId) => dispatch(showNewProjectForm(teamId)),
    fetchProjectSections: (projectId) => dispatch(fetchProjectSections(projectId)),
    updateTeam: (team) => dispatch(updateTeam(team)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    showAddTeamUserForm: (teamId) => dispatch(showAddTeamUserForm(teamId))
})

class Team extends React.Component{
    constructor(props){
        super(props);
        this.teamNavbar = this.teamNavbar.bind(this);
    }

    teamNavbar(){
        const path = this.props.location.pathname;
        const show = path.substring(path.length-4, path.length) === "show"
        const messages = path.substring(path.length-8, path.length) === "messages"
        const calendar = path.substring(path.length-8, path.length) === "calendar"

        return (
            <div className="second-navbar">
                <div className={`second-navbar-item ${show ? "active" : ""}`}>
                    <Link to={`/teams/${this.props.teamId}/show`} >Overview</Link>
                </div>
                <div className={`second-navbar-item ${messages ? "active" : ""}`}>
                    <Link to={`/teams/${this.props.teamId}/messages`}>Messages</Link>
                </div>
                <div className={`second-navbar-item ${calendar ? "active" : ""}`}>
                    <Link to={`/teams/${this.props.teamId}/calendar`} >Calendar</Link>
                </div>
            </div>
        )
    }

    upgradeToPro(){
        return <div className="pro right-most">
            <a href="https://www.linkedin.com/in/david-jeahoung-hong-7ab00b134/">
                <p>Upgrade to Pro!</p>
            </a>
            <video autoPlay muted loop>
                <source src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/949edc4d27496bb98db9a9a584adf44437613b90/dashboard_empty_state.mp4"
                type="video/mp4" autoplay/>
            </video>
            {/* <video src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/949edc4d27496bb98db9a9a584adf44437613b90/dashboard_empty_state.mp4" class="EmptyStateVideoCta-media EmptyStateVideoCta-media--small" loop="" autoplay=""></video> */}
        </div>
    }

    upgradeToPro(){
        return <div className="pro right-most">
            <a href="https://www.linkedin.com/in/david-jeahoung-hong-7ab00b134/">
                <p>Upgrade to Pro!</p>
            </a>
            <video autoPlay muted loop>
                <source src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/949edc4d27496bb98db9a9a584adf44437613b90/dashboard_empty_state.mp4"
                type="video/mp4" autoplay/>
            </video>
            {/* <video src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/949edc4d27496bb98db9a9a584adf44437613b90/dashboard_empty_state.mp4" class="EmptyStateVideoCta-media EmptyStateVideoCta-media--small" loop="" autoplay=""></video> */}
        </div>
    }

    renderTeam(path){
        switch(path.substring(path.length-4,path.length)){
            case "show":
                return <TeamShow {...this.props}/>;
            case "ages":
                return this.upgradeToPro();
            case "ndar":
                return this.upgradeToPro();
            default:
                return null
        }
    }

    render(){return (
        <div className="team-page">
            {this.teamNavbar()}
            {this.renderTeam(this.props.path)}
            {/* <TeamShow {...this.props}/> */}
        </div>
    )}
}

export const TeamContainer = connect(mapStateToProps, mapDispatchToProps)(Team);