import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {

    constructor(props){
        super(props);
        this.date = new Date();
        this.projects = this.projects.bind(this);
        this.tasks = this.tasks.bind(this);
        this.pushProject = this.pushProject.bind(this);
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
        // debugger;
    }

    dueDate(date){
        return date ? (" " + this.MONTHS[date.substring(5,7) - 1] + " " + date.substring(8,10)) : " No Due Date"
    }

    componentDidMount(){
        if (this.props.currentUser && this.props.currentUser.userTasks){
            this.props.currentUser.userTasks.forEach(taskId => {
                this.props.fetchTask(taskId)
            })
        }
    }

    toggleComplete(task){
        let currentTask = Object.assign({},task);

        currentTask.owner_id = currentTask.owner_id || currentTask.ownerId;
        delete currentTask.ownerId;
        currentTask.due_date = currentTask.due_date || currentTask.dueDate;
        delete currentTask.dueDate;
        currentTask.owner_type = currentTask.owner_type || currentTask.ownerType;
        delete currentTask.ownerType;
        currentTask.user_id = currentTask.userId;
        delete currentTask.userId;
        currentTask.complete = !currentTask.complete;

        this.props.updateTask(currentTask);
    }

    pushProject(e, task){
        let that = this;
        if (e.target.className.indexOf("fa-circle-check") < 0){
            this.props.history.push(`/projects/${task.projectId}/overview`)
            // debugger;
            setTimeout(() => {
                this.props.showUpdateTaskForm(task);
            }, 10)
        }
    }

    tasks(){
        if (Object.keys(this.props.tasks).length > 0){
            const validTasks = Object.values(this.props.tasks).filter((task) => {
                this.props.currentUser.userTasks.includes(task.id)
                // !task.complete
            })
            // debugger;
            return (<ul className="priority-task-list">
                {Object.values(this.props.tasks).map((task) => (
                    (!task.complete && this.props.currentUser.userTasks.includes(task.id)) ? 
                    <li className="priority-task" onClick={(e) => this.pushProject(e, task)}>
                        <div className="left">
                            <i className={`fa-regular fa-circle-check`}
                                    onClick={() => this.toggleComplete(task)}></i>
                            <div className="priority-task-title">
                                <span>{task.title}</span>
                                <div className={`due-date ${task.dueDate < this.today ? "late" : "on-time"}`}>
                                    {this.dueDate(task.dueDate)}
                                </div>
                            </div>
                        </div>

                        <div className="right">
                            <div>
                                Go to project <i class="fa-solid fa-angles-right"></i>
                            </div>
                        </div>
                        
                    </li> : ""
                ))}
            </ul>)
        }
    }

    projects(){
        if (this.props.projects && Object.keys(this.props.projects).length > 1){
            const projects = Object.values(this.props.projects).map((project) => 
                <li>
                    <Link to={`/projects/${project.id}/overview`}>
                        <div className="project-box">
                            <i class="fa-solid fa-diagram-project"></i>
                        </div>
                        <span>
                            {project.title}
                        </span>
                    </Link>
                </li>)
            return (<ul>
                {projects}
            </ul>)
        }
    }

    weekday(day){
        const weekday = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday"
        }
        return weekday[day]
    }

    month(mon){
        const months= {
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

        return months[mon];
    }

    render(){return (
        <div id="home-screen" className="right-most">
            <div className="welcome-greeting">
                <div className="date">{this.weekday(this.date.getDay())}, {this.month(this.date.getMonth())} {this.date.getDate()}</div>
                <p>Welcome, {this.props.currentUser.firstName}.</p>
            </div>

            <div className="priorities-projects-people">
                <div className="priorities-projects">
                    <div className="priorities">
                        <h1>My Priorities</h1>
                        {this.tasks()}
                        
                    </div>
                    <div className="projects">
                        <h1>My Projects</h1>
                        {this.projects()}
                    </div>
                </div>

                <div className="people">
                    <h1>People</h1>
                    
                </div>
            </div>
        </div>
    )}
}

export default Home;