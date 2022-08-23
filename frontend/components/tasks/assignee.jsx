import React from "react";

class Assignee extends React.Component {

    constructor(props){
        super(props)
        this.state={
            input: false,
            value: ""
        }
        
        this.path = props.location.pathname.substring(0);
        console.log(this.path)
        this.toggleInput = this.toggleInput.bind(this);
        this.taskUser = this.taskUser.bind(this);
        this.dropdown = this.dropdown.bind(this);
    }

    taskUser(){
        if (this.props.task && this.props.task.userId && this.props.users[this.props.task.userId]){
            const user = this.props.users[this.props.task.userId];
            return (<div className="profile-box task-show-open">
                <div className="profile-circle task-show-open">
                    {user.firstName[0] + user.lastName[0]}
                </div>
                <span className="task-show-open">{user.firstName + " " + user.lastName}</span>
                <i class="fa-solid fa-circle-xmark task-show-open"></i>
            </div>)
        } else {
            return (<div className="profile-box task-show-open">
                <div className="profile-circle task-show-open">
                    <i class="fa-solid fa-user task-show-open"></i>
                </div>
                <span className="task-show-open">No User</span>
                
            </div>)
        }
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    toggleInput(){
        this.path = this.props.location.pathname.substring(10);
        let idx = this.path.indexOf("/")
        this.path = parseInt(this.path.substring(0,idx))
        this.setState({input: !this.state.input})
        console.log(this.props)

        setTimeout(() => {
            let input = document.getElementById("assignee-input")
            if (input){
                input.select();
            }
        }, 0)
    }

    dropdown(){
        if (this.props.projects[this.path] && this.props.projects[this.path].projectUsers){
            let validUsers = Object.values(this.props.users).filter((user) => (
                this.props.projects[this.path].projectUsers.includes(user.id)
            ))
            console.log(this.state.value)
            return(<div className="dropdown">
                {validUsers.map((user) => (
                    (user.firstName + " " + user.lastName).substring(0,this.state.value.length) === this.state.value ?
                    <div className="profile-box task-show-open">
                        <div className="profile-circle task-show-open">
                            {user.firstName[0] + user.lastName[0]}
                        </div>
                        <span className="task-show-open">{user.firstName + " " + user.lastName}</span>
                    </div> : ""
                ))}
            </div>)
        }
    }

    render(){
        if (this.state.input){
            return (<div onBlur={this.toggleInput} className="task-show-open">
                <input id="assignee-input" 
                        className="task-show-open" 
                        value={this.state.value}
                        onChange={this.handleInput("value")} 
                />
                {this.dropdown()}
            </div>)
        } else {
            return (<div onClick={this.toggleInput} className="task-show-open">
                {this.taskUser()}
            </div>)
        }
    }
}

export default Assignee;