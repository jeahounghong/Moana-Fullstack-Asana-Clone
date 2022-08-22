import { connect } from "react-redux";
import { closeTaskShow } from "../../actions/ui_actions";
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
    closeTaskShow: () => dispatch(closeTaskShow())
})

const TaskShowContainer = connect(mapStateToProps,mapDispatchToProps)(TaskShow)
export default TaskShowContainer;