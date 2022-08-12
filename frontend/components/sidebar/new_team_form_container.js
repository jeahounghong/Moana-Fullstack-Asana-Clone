import { connect } from "react-redux";
import NewTeamForm from "./new_team_form";
import { withRouter } from "react-router-dom";
import {createTeam} from './../../actions/team_actions'
import {printTeam} from './../../actions/team_actions'

const mapStateToProps = state => ({
    currentUserId: state.session.id 
})

const mapDispatchToProps = dispatch => ({
    createTeam: (team) => dispatch(createTeam(team)),
    printTeam: (team) => printTeam(team)
})

const NewTeamFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewTeamForm));
export default NewTeamFormContainer;