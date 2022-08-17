import { connect } from "react-redux";
import { updateTeam } from "../../actions/team_actions";
import UpdateTeamForm from "./update_team_form";

const mapStateToProps = state => ({
    team: state.entities.teams[state.ui.modalTeam],
    teamId: state.ui.modalTeam,
    currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
    updateTeam: (team) => dispatch(updateTeam(team))
})

const UpdateTeamFormContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateTeamForm);
export default UpdateTeamFormContainer;