import { connect } from "react-redux";
import { addTeamUser, fetchUserTeams } from "../../actions/team_actions";
import AddTeamUserForm from "./add_team_user_form";


const mapStateToProps = (state, ownProps) => ({
    teams: state.entities.teams,
    modalTeam: state.ui.modalTeam,
    currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
    addTeamUser: (userData) => dispatch(addTeamUser(userData)),
    fetchUserTeams: (userId) => dispatch(fetchUserTeams(userId))
})

const AddTeamUserFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddTeamUserForm)
export default AddTeamUserFormContainer;