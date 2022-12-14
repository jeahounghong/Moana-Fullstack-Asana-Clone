import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        if (this.props.formType === "signup"){
            this.setState({email: ""})
            this.setState({firstName: ""})
            this.setState({lastName: ""})
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.currentTarget.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processSessionForm(this.state);
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    render(){return(
        <div className="session-form-container">
            <div className="form-logo">
                <img src={window.logo} alt="" />
            </div>
            {/* <div className="form-heading">{this.props.formType}</div> */}
            <img className="form-background-image" src={window.background} alt="form-background" />
            <form onSubmit={this.handleSubmit} className="session-form">
                {/* USERNAME INPUT */}
                <label>Username:
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInput("username")}
                    />
                </label>

                {/* EMAIL, FIRST NAME, LAST NAME INPUT ONLY FOR SIGNUP */}
                {this.props.formType === "Sign Up" ? 
                    <label>Email:
                        <input 
                            type="text" 
                            value={this.state.email} 
                            onChange={this.handleInput('email')}
                        />
                    </label>
                : ""}
                {this.props.formType === "Sign Up" ? 
                    <label>First Name:
                        <input 
                            type="text" 
                            value={this.state.firstName} 
                            onChange={this.handleInput('firstName')}
                        />
                    </label>
                : ""}
                {this.props.formType === "Sign Up" ? 
                    <label>Last Name:
                        <input 
                            type="text" 
                            value={this.state.lastName} 
                            onChange={this.handleInput('lastName')}
                        />
                    </label>
                : ""}

                {/* PASSWORD INPUT */}
                <label>Password:
                    <input 
                        type="password" 
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                    />
                </label>

                {/* SUBMIT FORM */}
                <input 
                    type="submit"
                    value={this.props.formType}
                    className="submit"
                />
            </form>

            {/* ERRORS */}
            <ul className="session-form-errors">
                {Object.values(this.props.errors).map((error) => <li>* {error}</li>)}
            </ul>
            <div className="back-to-home">
                <Link to={"/"}>Back to Home</Link>
            </div>
        </div>
    )}
}

export default SessionForm;