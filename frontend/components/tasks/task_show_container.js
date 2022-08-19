import { connect } from "react-redux";
import { closeTaskShow } from "../../actions/ui_actions";
import TaskShow from "./task_show";

const mapStateToProps = state => ({
    show: state.ui.taskShow,
    content: state.ui.taskContent,
    task: {
        title: "",
        description: "",
        dueDate: null,
        complete: false
    }
})

const mapDispatchToProps = dispatch => ({
    closeTaskShow: () => dispatch(closeTaskShow())
})

const TaskShowContainer = connect(mapStateToProps,mapDispatchToProps)(TaskShow)
export default TaskShowContainer;