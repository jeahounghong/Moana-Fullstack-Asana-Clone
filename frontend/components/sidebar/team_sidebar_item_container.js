import { connect } from "react-redux";
import TeamSidebarItem from "./team_sidebar_item";
import { fetchUserProjects } from "../../actions/project_actions";
import { fetchProjectSections } from "../../actions/section_actions";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => ({
    team: ownProps.team,
    projects: state.entities.projects,
    currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
    fetchProjectSections: (projectId) => dispatch(fetchProjectSections(projectId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

const TeamSidebarItemContainer = connect(mapStateToProps, mapDispatchToProps)(TeamSidebarItem);
export default TeamSidebarItemContainer;