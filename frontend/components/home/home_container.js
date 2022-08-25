import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import { fetchTask } from "../../actions/task_actions";
import Home from "./home";

const mapStateToProps = state => ({
    currentUser: (Boolean(state.session.id) ? state.entities.users[state.session.id] : null),
    projects: state.entities.projects,
    users: state.entities.users,
    tasks: state.entities.tasks
})

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    fetchTask: (taskId) => dispatch(fetchTask(taskId))
})

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeContainer;