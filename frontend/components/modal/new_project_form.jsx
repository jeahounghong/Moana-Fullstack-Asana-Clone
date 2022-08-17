import React from "react";

class NewProjectForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            description: "",
            public: true,
            team_id: this.getTeamIdFromPath(this.props.location.pathname)
        }
        console.log(this.state)

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getTeamIdFromPath(path){
        const id = path.substring(7);
        let idx = id.indexOf("/")
        return (idx >= 0) ? parseInt(id.substring(0,idx)) : null
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createProject(this.state)
    }

    handleInput(type){
        return (e) => {
            // this.setState({teamInfo: {[type]: e.currentTarget.value}})
            this.setState({[type]: e.currentTarget.value})
        }
    }

    render(){return(
        <div className="modal-content">
            <h3>Create New Project</h3>
            <div className="modal-line"></div>
            <form className="project-modal-form">
                <label>Title:
                    <input type="text"
                            value={this.state.title}
                            onChange={this.handleInput("title")} />
                </label>
                <label>Description:
                    <textarea value={this.state.description}
                            onChange={this.handleInput("description")} />
                </label>
                <label> Public?
                    <select name="public" value={this.state.public} onChange={this.handleInput("public")}>
                        <option value={true} defaultValue>Public (Default)</option>
                        <option value={false}>Private</option>
                    </select>                       
                </label>
                <input type="submit" value="Create Project" />
            </form>
        </div>
    )}
}

export default NewProjectForm;