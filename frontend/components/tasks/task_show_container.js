import { connect } from "react-redux";
import { closeTaskShow, showUpdateTaskForm } from "../../actions/ui_actions";
// import { closeTaskShow } from "../../actions/ui_actions";
import {deleteTask, updateTask, fetchSubtasks, createTask, fetchProjectTasks, fetchTask} from "../../actions/task_actions"
import TaskShow from "./task_show";


const mapStateToProps = state => ({
    show: state.ui.taskShow,
    content: state.ui.taskContent,
    task: state.ui.taskContent,
    // ? state.ui.taskContent : {
    //     title: "",
    //     description: "",
    //     dueDate: null,
    //     complete: false
    // },
    tasks: state.entities.tasks,
    users: state.entities.users,
    projects: state.entities.projects
})

const mapDispatchToProps = dispatch => ({
    closeTaskShow: () => dispatch(closeTaskShow()),
    showUpdateTaskForm: (task) => dispatch(showUpdateTaskForm(task)),
    updateTask: (task) => dispatch(updateTask(task)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    fetchSubtasks: (taskId) => dispatch(fetchSubtasks(taskId)),
    createTask: (task) => dispatch(createTask(task)),
    fetchProjectTasks: (projectId) => dispatch(fetchProjectTasks(projectId)),
    fetchTask: (taskId) => dispatch(fetchTask(taskId))
})

const TaskShowContainer = connect(mapStateToProps,mapDispatchToProps)(TaskShow)
export default TaskShowContainer;