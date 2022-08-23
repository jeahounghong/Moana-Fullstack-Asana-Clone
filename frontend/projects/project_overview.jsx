import React from "react";

export default class ProjectOverview extends React.Component {

    constructor(props){
        super(props);
        this.description = this.description.bind(this);
        this.people = this.people.bind(this);
        this.tasks = this.tasks.bind(this)
    }

    description(){
        if (Object.keys(this.props.projects).length > 0){
            return (<div className="description-text">
                {this.props.projects[this.props.projectId].description}
            </div>)
        }
    }

    people(){
        if (this.props.projects[this.props.projectId] && Object.keys(this.props.users).length > 0){
            return (<ul>
                {/* lskdnlksdg */}
                <li className="add-box"> 
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

    tasks(){
        if (this.props.projects[this.props.projectId]){
            return (<ul>
                {this.props.projects[this.props.projectId].projectTasks.map((taskId) => (
                    <li className="task-show-open" onClick={() => this.props.showUpdateTaskForm(this.props.tasks[taskId])}> 
                        {this.props.tasks[taskId] ? 
                            <div
                                    className="task-show-open"
                            >
                                <i className={`fa-regular fa-circle-check task-show-open
                                ${this.props.tasks[taskId].complete ? "complete" : "incomplete"}`}></i> 
                                {" " + this.props.tasks[taskId].title}
                            </div>  
                        : ""}
                    </li>
                ))}

                {this.props.projects[this.props.projectId].projectSections.map((sectionId) => (
                    <div>
                        {this.props.sections[sectionId] ? this.props.sections[sectionId].sectionTasks.map((taskId) => (
                            <li onClick={() => this.props.showUpdateTaskForm(this.props.tasks[taskId])} className="task-show-open">
                                {this.props.tasks[taskId] ? 
                                    <div onClick={() => console.log(this.props.tasks[taskId])}
                                                className="task-show-open"
                                    ><i className={`fa-regular fa-circle-check
                                        ${this.props.tasks[taskId].complete ? "complete" : "incomplete"}`}></i> 
                                    {" " + this.props.tasks[taskId].title}</div>  
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
                        {this.description()}
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