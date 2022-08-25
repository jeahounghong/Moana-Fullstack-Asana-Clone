import React from "react";

export default class ProjectOverview extends React.Component {

    constructor(props){
        super(props);
        this.description = this.description.bind(this);
        this.people = this.people.bind(this);
        this.tasks = this.tasks.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this)
        this.updateDescription = this.updateDescription.bind(this);

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

    description(){
        if (Object.keys(this.props.projects).length > 0){
            return (<div className="description-text">
                {this.props.projects[this.props.projectId].description}
            </div>)
        }
    }

    updateDescription(e){
        // let description = document.getElementById("project-description-box")
        let currentProject = Object.assign({}, this.props.projects[this.props.projectId])
        currentProject.description = e.target.innerText
        delete currentProject.projectSections
        delete currentProject.projectTasks
        delete currentProject.projectUsers
        // debugger;
        this.props.updateProject(currentProject);
    }

    people(){
        if (this.props.projects[this.props.projectId] && Object.keys(this.props.users).length > 0){
            return (<ul>
                {/* lskdnlksdg */}
                <li className="add-box" onClick={() => this.props.showAddProjectUserForm(this.props.projectId, this.props.projects[this.props.projectId].teamId)}> 
                    <div className="add-icon">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div>
                        Add User
                    </div>
                </li>
                {this.props.projects[this.props.projectId].projectUsers.map((userId) => (
                    this.props.users[userId] ? 
                    <li className="people-box">
                        <div className="initials">
                            {this.props.users[userId].firstName[0] + this.props.users[userId].lastName[0]}
                        </div>
                        <div >
                            {this.props.users[userId].firstName}
                        </div>
                        <div >
                            {this.props.users[userId].lastName}
                        </div>

                    </li> : ""
                ))}
            </ul>)
        }
    }

    toggleComplete(task){
        let currentTask = Object.assign({},task);


        currentTask.complete = !currentTask.complete;
        currentTask.owner_id = currentTask.owner_id || currentTask.ownerId;
        delete currentTask.ownerId;
        currentTask.due_date = currentTask.due_date || currentTask.dueDate;
        delete currentTask.dueDate;
        currentTask.owner_type = currentTask.owner_type || currentTask.ownerType;
        delete currentTask.ownerType;
        currentTask.user_id = currentTask.user_id;
        delete currentTask.userId;
        this.props.updateTask(currentTask);
    }

    dueDate(date){
        let day = new Date();
        day = day.getFullYear() + "-" + ((day.getMonth() + 1) < 10 ? "0" + (day.getMonth() + 1) : (day.getMonth() + 1)) + "-" + 
                        (day.getDate() < 10 ? ("0" + day.getDate()) : day.getDate())
        return (<div>
            {date ? (" " + this.MONTHS[date.substring(5,7) - 1] + " " + date.substring(8,10)) : " No Due Date"}
        </div>)
    }

    tasks(){
        if (this.props.projects[this.props.projectId]){
            return (<ul>
                {this.props.projects[this.props.projectId].projectTasks.map((taskId) => (
                    <li className="task-show-open" onClick={() => this.props.showUpdateTaskForm(this.props.tasks[taskId])}> 
                        {this.props.tasks[taskId] ? 
                            <div className={`task-show-open overview-tasks ${this.props.tasks[taskId].complete ? "complete" : "" } `}>
                                <div className="left task-show-open">
                                    <i className={`fa-regular fa-circle-check
                                    ${this.props.tasks[taskId].complete ? "complete" : "incomplete"}`}
                                        onMouseDown={() => this.toggleComplete(this.props.tasks[taskId])}></i> 
                                    <span className={`${this.props.tasks[taskId].complete ? "complete" : "" }`}>
                                        {" " + this.props.tasks[taskId].title}</span>   
                                </div>
                                <div className="right task-show-open">
                                <span className={`due-date task-show-open ${this.props.tasks[taskId].dueDate < this.today && !this.props.tasks[taskId].complete? "late" : "on-time"}`}>
                                        {this.props.tasks[taskId] ? this.dueDate(this.props.tasks[taskId].dueDate) : ""}
                                    </span>
                                    <span className="profile-circle">
                                        {this.props.tasks[taskId] && this.props.tasks[taskId].userId && this.props.users[this.props.tasks[taskId].userId] ? 
                                            this.props.users[this.props.tasks[taskId].userId].firstName[0] +  
                                            this.props.users[this.props.tasks[taskId].userId].lastName[0]
                                            : <i class="fa-solid fa-user"></i>
                                        }
                                    </span>
                                </div>
                                
                            </div>  
                        : ""}
                    </li>
                ))}

                {this.props.projects[this.props.projectId].projectSections.map((sectionId) => (
                    <div>
                        {this.props.sections[sectionId] ? this.props.sections[sectionId].sectionTasks.map((taskId) => (
                            <li onClick={() => this.props.showUpdateTaskForm(this.props.tasks[taskId])} className="task-show-open">
                                {this.props.tasks[taskId] ? 
                                    <div className={`task-show-open overview-tasks ${this.props.tasks[taskId].complete ? "complete" : "" } `}>
                                    <div className="left task-show-open">
                                        <i className={`fa-regular fa-circle-check
                                        ${this.props.tasks[taskId].complete ? "complete" : "incomplete"}`}
                                            onMouseDown={() => this.toggleComplete(this.props.tasks[taskId])}></i> 
                                        <span className={`${this.props.tasks[taskId].complete ? "complete" : "" }`}>
                                            {" " + this.props.tasks[taskId].title}</span>   
                                    </div>
                                    <div className="right task-show-open">
                                        <span className={`due-date task-show-open ${this.props.tasks[taskId].dueDate < this.today && !this.props.tasks[taskId].complete? "late" : "on-time"}`}>
                                            {this.props.tasks[taskId] ? this.dueDate(this.props.tasks[taskId].dueDate) : ""}
                                        </span>
                                        <span className="profile-circle">
                                            {this.props.tasks[taskId] && this.props.tasks[taskId].userId && this.props.users[this.props.tasks[taskId].userId] ? 
                                                this.props.users[this.props.tasks[taskId].userId].firstName[0] +  
                                                this.props.users[this.props.tasks[taskId].userId].lastName[0]
                                                : <i class="fa-solid fa-user"></i>
                                            }
                                        </span>
                                    </div>
                                    
                                </div>  
                                : ""}
                            </li>
                        )) : ""}
                    </div>
                ))}
            </ul>)
        }
    }


    render(){return(
        <div id="project-overview" className="right-most">
        
            <div className="project-overview-content">
                <div className="left-content">
                    <div className="project-overview-description">
                        <h1>Description</h1>
                        <div id="project-description-box" onBlur={this.updateDescription} contentEditable={true}>
                            {this.description()}    
                        </div>
                    </div>
                    <div className="people">
                        <h1>People</h1>
                        {this.people()}
                    </div>
                </div>

                <div className="right-content">
                    <h1>Project Tasks</h1>
                    {this.tasks()}
                </div>

            </div>
        </div>
    )}
}