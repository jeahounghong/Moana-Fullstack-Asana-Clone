import { connect } from "react-redux";
import TeamSidebarItem from "./team_sidebar_item";
import { fetchUserProjects } from "../../actions/project_actions";

const mapStateToProps = (state, ownProps) => ({
    team: ownProps.team,
    projects: state.entities.projects,
    currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
    fetchUserProjects: (userId) => dispatch(fetchUserProjects(userId)),
})

const TeamSidebarItemContainer = connect(mapStateToProps, mapDispatchToProps)(TeamSidebarItem);
export default TeamSidebarItemContainer;