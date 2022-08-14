import React from "react";
import { connect } from "react-redux";
import TeamShow from "./team_show";

const mapStateToProps = (state, ownProps) => ({
    team: state.entities.teams[ownProps.match.params.team_id]
})

const mapDispatchToProps = (dispatch) => ({

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