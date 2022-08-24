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
        this.toggleDropdown = this.toggleDropdown.bind(this)
    }

    handleInput(type){
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    toggleDropdown(){
        this.setState({showDropdown: !this.state.showDropdown})
    }

    dropdown(){
        if (this.state.showDropdown){
            return (<div>
                Hi
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