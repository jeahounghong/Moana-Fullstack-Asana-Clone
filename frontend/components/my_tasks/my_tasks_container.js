import { connect } from "react-redux";
import { fetchTask } from "../../actions/task_actions";
import {showUpdateTaskForm} from "../../actions/ui_actions"
import MyTasks from "./my_tasks";


const mapStateToProps = state => ({
    currentUser: state.session.id,
    users: state.entities.users,
    tasks: state.entities.tasks,
    projects: state.entities.projects
})

const mapDispatchToProps = dispatch => ({
    fetchTask: (taskId) => dispatch(fetchTask(taskId)),
    showUpdateTaskForm: (task) => dispatch(showUpdateTaskForm(task))
})

const MyTasksContainer = connect(mapStateToProps, mapDispatchToProps)(MyTasks);
export default MyTasksContainer;
