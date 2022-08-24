import { connect } from "react-redux";
import AddProjectUserForm from "./add_project_user_form";

const mapStateToProps = state => ({
    projects: state.entities.projects,
    modalProject: state.ui.modalProject,
    modalTeam: state.ui.modalTeam,
    users: state.entities.users,
    teams: state.entities.teams,
})

const mapDispatchToProps = dispatch => ({

})

const AddProjectUserFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddProjectUserForm)
export default AddProjectUserFormContainer;
