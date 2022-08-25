import { connect } from "react-redux";
import { fetchTask, updateTask } from "../../actions/task_actions";
import {showUpdateTaskForm} from "../../actions/ui_actions"
import { fetchProjectUsers } from "../../actions/user_actions";
import MyTasks from "./my_tasks";


const mapStateToProps = state => ({
    currentUser: state.session.id,
    users: state.entities.users,
    tasks: state.entities.tasks,
    projects: state.entities.projects,
    teams: state.entities.teams
})

const mapDispatchToProps = dispatch => ({
    fetchTask: (taskId) => dispatch(fetchTask(taskId)),
    showUpdateTaskForm: (task) => dispatch(showUpdateTaskForm(task)),
    fetchProjectUsers: (projectId) => dispatch(fetchProjectUsers(projectId)),
    updateTask: (task) => dispatch(updateTask(task))
})

const MyTasksContainer = connect(mapStateToProps, mapDispatchToProps)(MyTasks);
export default MyTasksContainer;
