import { connect } from "react-redux";
import { closeTaskShow, showUpdateTaskForm } from "../../actions/ui_actions";
// import { closeTaskShow } from "../../actions/ui_actions";
import {updateTask} from "../../actions/task_actions"
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
    tasks: state.entities.tasks
})

const mapDispatchToProps = dispatch => ({
    closeTaskShow: () => dispatch(closeTaskShow()),
    showUpdateTaskForm: (task) => dispatch(showUpdateTaskForm(task)),
    updateTask: (task) => dispatch(updateTask(task))
})

const TaskShowContainer = connect(mapStateToProps,mapDispatchToProps)(TaskShow)
export default TaskShowContainer;