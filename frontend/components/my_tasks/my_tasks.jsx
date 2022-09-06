import React from 'react';

export default class MyTasks extends React.Component {
    constructor(props){
        super(props);

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

        this.tasks = this.tasks.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this);

        let day = new Date();
        day = day.getFullYear() + "-" + ((day.getMonth() + 1) < 10 ? "0" + (day.getMonth() + 1) : (day.getMonth() + 1)) + "-" + 
                        (day.getDate() < 10 ? ("0" + day.getDate()) : day.getDate())
        this.today = day;
    }

    componentDidMount(){
        this.props.users[this.props.currentUser].userTasks.forEach((taskId) => {
            this.props.fetchTask(taskId)
        })
        this.props.users[this.props.currentUser].userProjectsIds.forEach(projectId => {
            this.props.fetchProjectUsers(projectId)
        })
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

    dueDate(date){
        let day = new Date();
        day = day.getFullYear() + "-" + ((day.getMonth() + 1) < 10 ? "0" + (day.getMonth() + 1) : (day.getMonth() + 1)) + "-" + 
                        (day.getDate() < 10 ? ("0" + day.getDate()) : day.getDate())
        return (<div>
            {date ? (" " + this.MONTHS[date.substring(5,7) - 1] + " " + date.substring(8,10)) : " No Due Date"}
        </div>)
    }

    tasks(){
        let userTasks = this.props.users[this.props.currentUser].userTasks;
        let teams = this.props.teams;
        let projects = this.props.projects

        if (Object.values(this.props.tasks).length > 0){
            let tasks = this.props.tasks;
            return (<ul>
                {userTasks.map((taskId) => (
                    tasks[taskId] ? <li className='task-list-item task-show-open' onClick={(e) => {
                            if (e.target.className.indexOf("fa-circle-check") < 0){
                                this.props.showUpdateTaskForm(tasks[taskId])
                            }
                        }}>
                        <div className='left task-show-open'>
                            <i className={`fa-regular fa-circle-check ${tasks[taskId].complete ? "complete" : "incomplete"}`}
                                onMouseDown={() => this.toggleComplete(tasks[taskId])}
                            ></i>
                            <span className={`${tasks[taskId].complete ? "complete" : ""}`}>{" " + tasks[taskId].title + " "}</span>
                            {tasks[taskId].subtasks.length > 0 ? <i className="fa-solid fa-folder-tree task-show-open"></i> : ""}
                        </div>
                        <div className='right task-show-open'>
                            <span className={`task-show-open ${tasks[taskId].complete ? "complete" : ""}
                                ${tasks[taskId].dueDate < this.today && !tasks[taskId].complete ? "late" : "on-time"}
                            `}>
                                {this.dueDate(tasks[taskId].dueDate)}
                            </span>
                            <span className={`task-show-open ${tasks[taskId].complete ? "complete" : ""}`}>
                                {projects[tasks[taskId].projectId] ? projects[tasks[taskId].projectId].title : ""}
                            </span>
                            <span className={`task-show-open ${tasks[taskId].complete ? "complete" : ""}`}>
                                {projects[tasks[taskId].projectId] && teams[projects[tasks[taskId].projectId].teamId] ? 
                                teams[projects[tasks[taskId].projectId].teamId].name : ""
                            }</span>
                        </div>
                    </li> : ""
                ))}
            </ul>)
        }
    }

    render(){
        return (<div id="my-tasks" className='right-most'>
            <div className='taskbar'>
                <div className='left'>
                    <div className='task-title'>
                        Tasks
                    </div>
                </div>
                <div className='right'>
                    <span><i className="fa-regular fa-calendar "></i> Due Date</span>
                    <span><i className="fa-solid fa-diagram-project"></i> Project</span>
                    <span><i className="fa-solid fa-people-group"></i> Team</span>
                </div>
            </div>
            {this.tasks()}
        </div>)
    }
}