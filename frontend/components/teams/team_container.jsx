import React from "react";
import { connect } from "react-redux";
import TeamShow from "./team_show";
import { fetchUserProjects } from "../../actions/project_actions";
import { showNewProjectForm } from "../../actions/ui_actions";
import { deleteSection, fetchProjectSections } from "../../actions/section_actions";

const mapStateToProps = (state, ownProps) => ({
    team: state.entities.teams[ownProps.match.params.team_id],
    projects: state.entities.projects,
    currentUser: state.session.id
})

const mapDispatchToProps = (dispatch) => ({
    fetchUserProjects: (userId) => dispatch(fetchUserProjects(userId)),
    showNewProjectForm: (teamId) => dispatch(showNewProjectForm(teamId)),
    fetchProjectSections: (projectId) => dispatch(fetchProjectSections(projectId)),
})

class Team extends React.Component{
    constructor(props){
        super(props);
        
        this.teamNavbar = this.teamNavbar.bind(this);
    }

    teamNavbar(){
        return (
            <div className="team-navbar">
                <div>
                    Overview
                </div>
                <div>
                    Messages
                </div>
                <div>
                    Calendar
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