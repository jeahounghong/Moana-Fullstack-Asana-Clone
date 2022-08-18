import React from "react";
import { connect } from "react-redux";
import TeamShow from "./team_show";
import { fetchUserProjects } from "../../actions/project_actions";
import { updateTeam } from "../../actions/team_actions";
import { showNewProjectForm } from "../../actions/ui_actions";
import { deleteSection, fetchProjectSections } from "../../actions/section_actions";
import { Link } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
    team: state.entities.teams[ownProps.match.params.team_id],
    projects: state.entities.projects,
    currentUser: state.session.id,
    teamId: ownProps.match.params.team_id
})

const mapDispatchToProps = (dispatch) => ({
    fetchUserProjects: (userId) => dispatch(fetchUserProjects(userId)),
    showNewProjectForm: (teamId) => dispatch(showNewProjectForm(teamId)),
    fetchProjectSections: (projectId) => dispatch(fetchProjectSections(projectId)),
    updateTeam: (team) => dispatch(updateTeam(team))
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

    render(){return (
        <div className="team-page">
            {this.teamNavbar()}
            <TeamShow {...this.props}/>
        </div>
    )}
}

export const TeamContainer = connect(mapStateToProps, mapDispatchToProps)(Team);