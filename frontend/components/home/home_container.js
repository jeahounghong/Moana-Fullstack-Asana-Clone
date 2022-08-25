import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import { fetchTask, updateTask } from "../../actions/task_actions";
import { showUpdateTaskForm } from "../../actions/ui_actions";
import Home from "./home";

const mapStateToProps = state => ({
    currentUser: (Boolean(state.session.id) ? state.entities.users[state.session.id] : null),
    projects: state.entities.projects,
    users: state.entities.users,
    tasks: state.entities.tasks
})

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    fetchTask: (taskId) => dispatch(fetchTask(taskId)),
    updateTask: (task) => dispatch(updateTask(task)),
    showUpdateTaskForm: (task) => dispatch(showUpdateTaskForm(task))
})

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeContainer;