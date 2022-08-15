import { connect } from "react-redux";
import { createProject } from "../../actions/project_actions";
import NewProjectForm from "./new_project_form";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    currentTeam: ownProps
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    closeModal: () => ownProps.closeModal(),
    createProject: (project) => dispatch(createProject(project))

})

const NewProjectFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewProjectForm));
export default NewProjectFormContainer;