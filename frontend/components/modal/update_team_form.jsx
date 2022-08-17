import React from "react";

class UpdateTeamForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            id: "",
            name: "",
            description: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);

        console.log(props)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateTeam(this.state)
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.team.id,
            name: this.props.team.name,
            description: this.props.team.description
        })
    }

    render(){return(
        <div className="modal-content">
            <h3>Update Team</h3>
            <div className="modal-line"></div>
            <form className="modal-form" onSubmit={this.handleSubmit}>
                <label>Name:
                    <input type="text"
                            value={this.state.name}
                            onChange={this.handleInput("name")} />
                </label>
                <label>Description:
                    <textarea value={this.state.description}
                            onChange={this.handleInput("description")} />
                </label>
                <input className="submit" type="submit" value="Update Team" />
            </form>
        </div>
    )}
}

export default UpdateTeamForm;