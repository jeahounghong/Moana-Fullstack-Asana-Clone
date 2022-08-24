import React from "react";

export default class AddProjectUserForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value: "",
            showDropdown: false
        }

        this.handleInput = this.handleInput.bind(this);
        this.dropdown = this.dropdown.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    componentWillReceiveProps(nextProps){
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    toggleDropdown(e){
        this.props.teams[this.props.modalTeam].teamUsers.forEach((userId) => {
            this.props.fetchUser(userId)
        })
        this.setState({showDropdown: !this.state.showDropdown})
    }

    handleMouseDown(user){
        // debugger;
        this.props.addProjectUser({userId: user.id, projectId: this.props.modalProject});
        setTimeout(() => {
            this.props.fetchUser(user.id)
        }, 300)
    }

    dropdown(){
        if (this.state.showDropdown){
            let projectTeam = this.props.teams[this.props.modalTeam];
            let project = this.props.projects[this.props.modalProject];
            // debugger;
            let teamUsersIds = projectTeam.teamUsers.filter((userId) => this.props.users[userId] && project.projectUsers.indexOf(userId) < 0)
            let teamUsers = teamUsersIds.map((userId) => this.props.users[userId])
            let teamUsersArray = Object.values(teamUsers);
            // debugger;
            return (<div>
                <ul>
                    {teamUsersArray.map((user) => (
                        <li onMouseDown={() => this.handleMouseDown(user)} className="dropdown-list-item">
                            {" " + user.firstName + " " + user.lastName}
                        </li>
                    ))}
                </ul>
            </div>)
        }
    }
    

    render(){return (
        <div className="add-user-form">
            <h3>{this.props.projects[this.props.modalProject].title}</h3>
            {/* Projectsss */}
            <span>Please select a teammate to be added to the project:</span>
            <label>
                <p>Type name here:</p>
                <input type="text" value={this.state.value} onChange={this.handleInput("value")} id="user-search" onFocus={this.toggleDropdown} onBlur={this.toggleDropdown}/>
                {this.dropdown()}
            </label>
        </div>
    )}
}