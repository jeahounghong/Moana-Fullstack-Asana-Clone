import { connect } from "react-redux";
import { updateProject } from "../../actions/project_actions";
import UpdateProjectForm from "./update_project_form";

const mapStateToProps = state => ({
    currentUser: state.session.id,
    projectId: state.ui.modalProject,
    project: state.entities.projects[state.ui.modalProject]
})

const mapDispatchToProps = dispatch => ({
    updateProject: (project) => dispatch(updateProject(project))
})

const UpdateProjectFormContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateProjectForm)
export default UpdateProjectFormContainer;