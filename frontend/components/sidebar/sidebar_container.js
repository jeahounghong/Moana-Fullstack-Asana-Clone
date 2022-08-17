import { connect } from "react-redux";
import Sidebar from "./sidebar";
import { fetchUserTeams } from "../../actions/team_actions";
import { showNewTeamForm } from "../../actions/ui_actions";
import { fetchUserProjects } from "../../actions/project_actions";
import { logoutUser } from "../../actions/session_actions";

const mapStateToProps = state => ({
    showSidebar: state.ui.sidebar,
    teams: state.entities.teams,
    currentUser: state.session.id
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchUserTeams: (id) => dispatch(fetchUserTeams(id)),
    showNewTeamForm: () => dispatch(showNewTeamForm()),
    fetchUserProjects: (userId) => dispatch(fetchUserProjects(userId)),
    logoutUser: () => dispatch(logoutUser())

})

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);
export default SidebarContainer;