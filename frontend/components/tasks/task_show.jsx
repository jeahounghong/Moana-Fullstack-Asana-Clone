import React from "react";
import Assignee from "./assignee";

class TaskShow extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.task;
        this.handleInput = this.handleInput.bind(this);

        document.addEventListener("click", (e) => {
            console.log(document.getElementById("task-show-container").style.width)

            if (this.props.show){
                console.log("time to close")
                if (e.target.className.indexOf("task-show-open") < 0){
                    this.props.closeTaskShow()
                }
            }

        })
    }

    componentWillReceiveProps(nextProps){
        this.setState(nextProps.task)
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    render(){
        return(
        <div id="task-show-container" className="task-show-open" >
            <div className="task-show-header task-show-open">
                <div className="complete-button">
                    <div className="task-show-open">
                        <i class="fa-solid fa-check"></i> Mark Complete
                    </div>
                </div>

                <div className="task-show-right">
                    <div className="close-task" onClick={this.props.closeTaskShow}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>

        
            <input className="task-title task-show-open" 
                    contentEditable={true} 
                    value={this.state.title}
                    placeholder="New Task"
                    onChange={this.handleInput("title")}
            />

            <div className="table task-show-open">
                <div className="left task-show-open">
                    {/* 1 */}
                    <p>Assignee</p>
                    {/* 2 */}
                    <p>Due date</p>
                </div>
                <div className="right task-show-open">
                    {/* 1 */}
                    <div className="assignee">
                        <Assignee {...this.props}/>
                    </div>
                    {/* 2 */}
                    <div className="date">
                        <input id="due-date" type="date" defaultValue="2014-02-09" />

                        {console.log(document.getElementById("due-date"))}
                    </div>
                </div>
            </div>

            {/* <label className="assignee-label">
                <p>Assignee:</p>
                <input type="select" />
            </label> */}


            <label className="task-description-label">
                <p>Description:</p>
                <div className="task-description" 
                        contentEditable={true}
                        data-placeholder="Write description here...">
                    {this.state.description}
                </div>
            </label>
        </div>
    )}
        
}

export default TaskShow;