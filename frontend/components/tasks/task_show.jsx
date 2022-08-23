import React from "react";
import { showUpdateTaskForm } from "../../actions/ui_actions";
import Assignee from "./assignee";
import DateComponent from "./date";

class TaskShow extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.task;
        this.handleInput = this.handleInput.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.updateCurrentTask = this.updateCurrentTask.bind(this)

        document.addEventListener("click", (e) => {
            if (this.props.show){
                if (e.target.className.indexOf("task-show-open") < 0 && e.target.className.indexOf("project-board-task") < 0){
                    this.props.closeTaskShow()
                }
            }
        })
    }

    componentWillReceiveProps(nextProps){
        // debugger;
        this.setState(nextProps.task)
    }

    handleInput(type){
        return (e) => {
            // e.preventDefault()
            this.setState({[type]: e.currentTarget.value})
        }
    }

    toggleComplete(){
        const toggledTask = Object.assign({}, this.state)
        toggledTask.complete = !toggledTask.complete
        

        toggledTask.owner_id = toggledTask.ownerId;
        delete toggledTask.ownerId;
        toggledTask.due_date = toggledTask.dueDate;
        delete toggledTask.dueDate;
        toggledTask.owner_type = toggledTask.ownerType;
        delete toggledTask.ownerType;
        toggledTask.user_id = toggledTask.userId;
        delete toggledTask.userId;


        this.props.updateTask(toggledTask);
        this.props.showUpdateTaskForm(toggledTask)
    }

    componentDidMount(){
        setTimeout(() => {
            const contents = $(".task-description")
            // const currentTask = Object.assign({}, this.state)
            
            contents.blur(()=>{
                const currentTask = Object.assign({}, this.state)
                currentTask.description = contents[0].innerHTML;
                currentTask.title = $(".task-title")[0].innerHTML;

                currentTask.owner_id = currentTask.ownerId;
                delete currentTask.ownerId;
                currentTask.due_date = currentTask.dueDate;
                delete currentTask.dueDate;
                currentTask.owner_type = currentTask.ownerType;
                delete currentTask.ownerType;
                currentTask.user_id = currentTask.userId;
                delete currentTask.userId;

                this.props.updateTask(currentTask)
            })
            contents.keydown((e) => {
                if (e.keyCode === 13){
                    e.preventDefault();
                }
            })


            const titleContent = $(".task-title")
            titleContent.blur(() => {
                const currentTask = Object.assign({}, this.state)
                currentTask.title = titleContent[0].innerHTML
                currentTask.description = $(".task-description")[0].innerHTML
                
                currentTask.owner_id = currentTask.ownerId;
                delete currentTask.ownerId;
                currentTask.due_date = currentTask.dueDate;
                delete currentTask.dueDate;
                currentTask.owner_type = currentTask.ownerType;
                delete currentTask.ownerType;
                currentTask.user_id = currentTask.userId;
                delete currentTask.userId;

                this.props.updateTask(currentTask)
            })
        }, 100)
    }

    updateCurrentTask(){
        const currentTask = Object.assign({}, this.state)
        let description = document.querySelector(".task-description")
        currentTask.description = description
        // console.log(description.innerHTML)
        // debugger;
        setTimeout(() => {
            // debugger;
            console.log("updating...")
            this.props.updateTask(this.state);
        }, 100)
        
    }

    render(){
        return(
        <div id="task-show-container" className="task-show-open" >
            <div className="task-show-header task-show-open">
                <div className={`complete-button ${this.state.complete ? "complete" : ""}`}
                        onClick={this.toggleComplete}
                >
                    <div className="task-show-open">
                        <i class="fa-solid fa-check"></i> { this.state.complete ? "Completed": "Mark Complete"}
                    </div>
                </div>

                <div className="task-show-right">
                    <div className="delete-task" onClick={() => this.props.deleteTask(this.state.id)}>
                        <i className="fa-solid fa-trash-can"></i>
                    </div>
                    <div className="close-task" onClick={this.props.closeTaskShow}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>

        
            <section className="task-title task-show-open" 
                    contentEditable={true} 
                    data-placeholder="New Task"
                    onChange={this.handleInput("title")}
                    >
                {this.state.title}
            </section>

            <div className="table task-show-open">
                <div className="left task-show-open">
                    {/* 1 */}
                    <p className="task-show-open">Assignee</p>
                    {/* 2 */}
                    <p className="task-show-open">Due date</p>
                </div>
                <div className="right task-show-open">
                    {/* 1 */}
                    <div className="assignee">
                        <Assignee {...this.props}/>
                    </div>
                    {/* 2 */}
                    <DateComponent {...this.props}/>
                    {/* <div className="date task-show-open">
                        <input id="due-date" type="date" defaultValue={(this.props.task ? this.props.task.dueDate : "")} className="task-show-open" />
                    </div> */}
                </div>
            </div>

            {/* <label className="assignee-label">
                <p>Assignee:</p>
                <input type="select" />
            </label> */}


            <label className="task-description-label task-show-open">
                <p>Description:</p>
                <section className="task-description task-show-open" 
                        contentEditable={true}
                        data-placeholder="Write description here..."
                        // onBlur={this.updateCurrentTask} 
                    >
                    {this.state.description}
                </section>
            </label>
        </div>
    )}
        
}

export default TaskShow;