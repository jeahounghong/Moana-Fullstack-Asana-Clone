import React from "react";

class NewTeamForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            teamInfo: {
                name: "",
                description: ""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type){
        return (e) => {
            // this.setState({teamInfo: {[type]: e.currentTarget.value}})
            this.setState({teamInfo: Object.assign(this.state.teamInfo,{[type]: e.currentTarget.value})})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const result = this.props.createTeam(this.state.teamInfo)
        console.log(result);

        /*
            If the team is successfully created, this should redirect to the team's show page. 
            Otherwise, it should render errors inside the modal
        */
    }

    componentDidMount(){
        console.log(this.props.closeModal)
    }

    render(){return(
        <div className="modal-container" onSubmit={this.handleSubmit}>
            <div className="modal-close-button"  onClick={this.props.closeModal}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="modal-content">
                <h3>Create new team</h3>
                <form className="team-modal-form">
                    <label>Team Name:
                        <input 
                            type="text" 
                            value={this.state.teamInfo.name}
                            onChange={this.handleInput("name")}
                        />
                    </label>
                    <label>Description:
                        <textarea 
                            value={this.state.teamInfo.description}
                            onChange={this.handleInput("description")}
                        />
                    </label>
                    <input type="submit" value="Create Form"/>
                </form>
            </div>

        </div>
    )}
}


export default NewTeamForm;