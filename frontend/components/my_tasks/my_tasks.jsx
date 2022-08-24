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
    }

    componentDidMount(){
        this.props.users[this.props.currentUser].userTasks.forEach((taskId) => {
            this.props.fetchTask(taskId)
        })
        this.props.users[this.props.currentUser].userProjectsIds.forEach(projectId => {
            this.props.fetchProjectUsers(projectId)
        })
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

        if (Object.values(this.props.tasks).length > 0){
            let tasks = this.props.tasks;
            return (<ul>
                {userTasks.map((taskId) => (
                    tasks[taskId] ? <li className='task-list-item task-show-open' onClick={() => this.props.showUpdateTaskForm(tasks[taskId])}>
                        <div className='left'>
                            <i className={`fa-regular fa-circle-check ${tasks[taskId].complete ? "complete" : "incomplete"}`}></i>
                            <span className={`${tasks[taskId].complete ? "complete" : ""}`}>{" " + tasks[taskId].title + " "}</span>
                            {tasks[taskId].subtasks.length > 0 ? <i class="fa-solid fa-folder-tree"></i> : ""}
                        </div>
                        <div className='right'>
                            {this.dueDate(tasks[taskId].dueDate)}
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
                    <i className="fa-regular fa-calendar task-show-open"></i>
                    <span> Due Date</span>
                    
                </div>
            </div>
            {this.tasks()}
        </div>)
    }
}