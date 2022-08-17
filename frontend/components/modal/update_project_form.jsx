import React from "react";

class UpdateProjectForm extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            title: "",
            description: "",
            public: true
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this)
    }

    componentDidMount(){
        this.setState(
            {
                title: this.props.project.title,
                description: this.props.project.description,
                public: this.props.project.public,
                team_id: this.props.project.teamId,
                id: this.props.project.id
            }
        )
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateProject(this.state)
    }

    handleInput(type){
        return (e) => {
            // this.setState({teamInfo: {[type]: e.currentTarget.value}})
            this.setState({[type]: e.currentTarget.value})
        }
    }

    render(){return (<div className="modal-content">
        <h3>Update project</h3>
        <div className="modal-line"></div>
        <form className="modal-form" onSubmit={this.handleSubmit}>
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
                    <option value={true} defaultValue>Public</option>
                    <option value={false}>Private</option>
                </select>                       
            </label>
            <input className="submit"type="submit" value="Update Project" />
        </form>
    </div>)}
}

export default UpdateProjectForm;