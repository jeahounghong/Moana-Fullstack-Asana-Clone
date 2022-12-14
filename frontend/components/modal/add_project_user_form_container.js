import { connect } from "react-redux";
import AddProjectUserForm from "./add_project_user_form";
import { fetchUser } from "../../actions/user_actions";
import {addProjectUser} from "../../actions/project_actions"

const mapStateToProps = state => ({
    projects: state.entities.projects,
    modalProject: state.ui.modalProject,
    modalTeam: state.ui.modalTeam,
    users: state.entities.users,
    teams: state.entities.teams,
})

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    addProjectUser: (userData) => dispatch(addProjectUser(userData))
})

const AddProjectUserFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddProjectUserForm)
export default AddProjectUserFormContainer;
