import { connect } from "react-redux";
import AppNavbar from "./app_navbar";
import { logoutUser } from "../../actions/session_actions";
import { openSidebar, closeSidebar, showUpdateTeamForm, showUpdateProjectForm} from "../../actions/ui_actions"
import { deleteTeam } from "../../actions/team_actions";
import { deleteProject } from "../../actions/project_actions";



const mapStateToProps = (state, ownProps) => ({
    currentUser: (Boolean(state.session.id) ? state.entities.users[state.session.id] : null),
    url: ownProps.location.pathname,
    showSidebar: state.ui.sidebar,
    teams: state.entities.teams,
    projects: state.entities.projects
})

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    openSidebar: () => dispatch(openSidebar()),
    closeSidebar: () => dispatch(closeSidebar()),
    deleteTeam: (teamId) => dispatch(deleteTeam(teamId)),
    deleteProject: (projectId) => dispatch(deleteProject(projectId)),
    showUpdateTeamForm: (team) => dispatch(showUpdateTeamForm(team)),
    showUpdateProjectForm: (project) => dispatch(showUpdateProjectForm(project))

})

const AppNavbarContainer = connect(mapStateToProps,mapDispatchToProps)(AppNavbar);
export default AppNavbarContainer;