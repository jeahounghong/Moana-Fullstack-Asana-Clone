import React from "react";

export default class AddTeamUserForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            teamId: this.props.modalTeam,
            username: "",
            email: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        // debugger;
        this.props.addTeamUser(this.state);
        setTimeout(() => {this.props.fetchUserTeams(this.props.currentUser)}, 300);
    }

    render(){return(<div className="add-user-form">
        {/* Test {this.props.modalTeam} */}
        <h3>{this.props.teams[this.props.modalTeam].name}</h3>
        <span>Please provide either the username or the email of the user you wish to add:</span>
        <form onSubmit={this.handleSubmit}>
            <label>
                <p>Username:</p>
                <input type="text" value={this.state.username} onChange={this.handleInput("username")} />
            </label>
            <label>
                <p>Email:</p>
                <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
            </label>
            <input type="submit" value="Add User" className="submit"/>
        </form>
    </div>)}
}

