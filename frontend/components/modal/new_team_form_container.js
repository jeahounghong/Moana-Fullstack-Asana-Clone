import { connect } from "react-redux";
import NewTeamForm from "./new_team_form";
import { withRouter } from "react-router-dom";
import {createTeam} from './../../actions/team_actions'


const mapStateToProps = state => ({
    currentUserId: state.session.id 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    createTeam: (team) => dispatch(createTeam(team)),
    closeModal: () => ownProps.closeModal()
})

const NewTeamFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewTeamForm));
export default NewTeamFormContainer;