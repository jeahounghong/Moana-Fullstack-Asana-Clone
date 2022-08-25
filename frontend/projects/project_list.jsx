import React from "react";
import TaskListContainer from '../components/tasks/task_list_container'

class ProjectList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            addSection: false,
            title: ""
        }
        this.description = this.description.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.addSectionForm = this.addSectionForm.bind(this);
        this.renderProjectTasks = this.renderProjectTasks.bind(this);
        this.renderSectionTasks = this.renderSectionTasks.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this);

        this.MONTHS = {
            0: "January",
            1: "February",
            2: "March",
            3: "April",
            4: "May",
            5: "June",
            6: "July",
            7: "August",
            8: "September",
            9: "October",
            10: "November",
            11: "December"
        }

        let day = new Date();
        day = day.getFullYear() + "-" + ((day.getMonth() + 1) < 10 ? "0" + (day.getMonth() + 1) : (day.getMonth() + 1)) + "-" + 
                        (day.getDate() < 10 ? ("0" + day.getDate()) : day.getDate())
        this.today = day;
    }

    dueDate(date){
        return date ? (" " + this.MONTHS[date.substring(5,7) - 1] + " " + date.substring(8,10)) : " No Due Date"
    }

    description(){
        return(
            <div className="project-list-description">
                <h3>Description:</h3>
                <div>{this.props.project ? this.props.project.description : ""}</div>
            </div>
        )
    }

    handleCreate(e){
        e.preventDefault();
        const title = this.state.title;
        this.props.createSection({
            title: title,
            project_id: parseInt(this.props.projectId)
        })
        this.setState({addSection: false})
        setTimeout(() => {this.setState({title: ""})}, 100)
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    addSectionForm(){return(
        <form onSubmit={this.handleCreate}>
            <label>Section Title:
                <input type="text" 
                    value={this.state.title}
                    onChange={this.handleInput("title")}
                />
            </label>
        </form>
    )}

    updateSection(e){
        console.log("hi")
    }

    componentDidMount(){
        // Used a setTimeout in place of a hook to allow for components to render
        setTimeout(() => {
            const contents = $('.sections')
            // console.log(contents)
            $('.sections').blur((() => {
                for( let i = 0; i < contents.length; i++){
                    let sectionId = parseInt(contents[i].id.substring(8))
                    if (contents[i].innerHTML === ""){
                        this.props.deleteSection(sectionId)
                    } else {
                        this.props.updateSection({
                            id: sectionId,
                            project_id: this.props.projectId,
                            title: contents[i].innerHTML
                        })
                    }
                    
                }
            }))

            contents.keydown((e) => {
                if (e.keyCode === 13){
                    e.preventDefault();
                }
            })
        }, 1000)
    }

    toggleComplete(task){
        let toggledTask = Object.assign({}, task)
        toggledTask.complete = !toggledTask.complete;

        toggledTask.owner_id = toggledTask.ownerId;
        delete toggledTask.ownerId;
        toggledTask.due_date = toggledTask.dueDate;
        delete toggledTask.dueDate;
        toggledTask.owner_type = toggledTask.ownerType;
        delete toggledTask.ownerType;
        toggledTask.user_id = toggledTask.userId;
        delete toggledTask.userId;


        this.props.updateTask(toggledTask)
        
    }

    renderProjectTasks(){
        return (
            <ul>
                <li className="project-section-li-items" key="project-list-todo">
                    To Do
                </li>
                {Object.values(this.props.tasks).map((task) => (
                    (task.ownerType === "Project" && task.ownerId === this.props.projectId) ? 
                    <li key={task.title+task.id} className={`project-list-task task-show-open ${task.complete ? "complete" : "incomplete"}`}
                        onClick={() => this.props.showUpdateTaskForm(task)}>
                        <div className="task-show-open">
                            <i className={`fa-regular fa-circle-check ${task.complete ? "complete" : "incomplete"}`}
                                    onClick={() => this.toggleComplete(task)}></i> {task.title}
                        </div>
                    </li> : ""
                ))}

                <li className="project-list-add-task" onClick={() => {
                                this.props.createTask({owner_id: this.props.projectId, owner_type: "Project"})
                            }}>
                    <i class="fa-regular fa-plus"></i>Add Task
                </li>
            </ul>

        )  
    }

    renderSectionTasks(sectionId){
        return(
            <ul>
                sdgnsdg
            </ul>
        )
    }

    render(){
        // debugger;
        return(
        <div className="project-list right-most">
            <div className="project-list-header">
                <div className="left">
                    <span>Task</span>
                </div>

                <div className="right">
                    <span>Due Date</span>
                    <span>Assignee</span>
                </div>
            </div>
            <div className="project-list-tasks">
                {this.renderProjectTasks()}
            </div>
            <div className="project-sections">
                {/* <h3>Sections</h3> */}
                <ul>
                    { Object.values(this.props.sections).map((section) => (
                        (section.projectId === this.props.projectId) ?
                        <div>
                            <li className="project-section-li-items" key={section.id}>
                                <span contentEditable={true} 
                                        onChange={this.updateSection} 
                                        className="sections bold" 
                                        id={`section-${section.id}`}
                                        suppressContentEditableWarning={true}>
                                    {this.props.sections[section.id] ? this.props.sections[section.id].title : ""}
                                </span>
                            </li>
                            {Object.values(this.props.tasks).map((task)=>(
                                (task.ownerType === "Section" && task.ownerId === section.id) ? 
                                <li key={task.title+task.id} className={`project-list-task task-show-open ${task.complete ? "complete" : "incomplete"}`}
                                        onClick={() => this.props.showUpdateTaskForm(task)}
                                >
                                    <div className="left task-show-open">
                                        <i className={`fa-regular fa-circle-check ${task.complete ? "complete" : "incomplete"}`}
                                                onClick={() => this.toggleComplete(task)}></i> 
                                        <span className="task-show-open">{task.title}</span>
                                    </div>
                                    <div className="right task-show-open">
                                        <span>{this.dueDate(task.dueDate)}</span>
                                        <span>{task.userId ? (this.props.users && this.props.users[task.userId] ? 
                                        this.props.users[task.userId].firstName + " " + this.props.users[task.userId].lastName : "") : "No Assignee"}</span>
                                    </div>

                                </li> : ""
                                
                            ))}
                            <li className="project-list-add-task" onClick={() => {
                                this.props.createTask({owner_id: section.id, owner_type: "Section"})
                            }}>
                                <i class="fa-regular fa-plus"></i>Add Task
                            </li>
                        </div> 
                         : ""
                    ))}

                </ul>
                <div className="add-section" onClick={() => this.setState({addSection: !this.state.addSection})}>Add Section +</div>
                {this.state.addSection ? this.addSectionForm() : ""}
            </div>
        </div>
    )}
}

export default ProjectList;