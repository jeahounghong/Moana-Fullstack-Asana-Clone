import React from "react";

class Assignee extends React.Component {

    constructor(props){
        super(props)
        this.state={
            input: false
        }

        this.toggleInput = this.toggleInput.bind(this);
    }

    toggleInput(){
        this.setState({input: !this.state.input})
        setTimeout(() => {
            let input = document.getElementById("assignee-input")
            if (input){
                input.select();
            }
        }, 0)
    }

    render(){
        if (this.state.input){
            return (<div onBlur={this.toggleInput}>
                <input id="assignee-input" />
            </div>)
        } else {
            return (<div onClick={this.toggleInput} >
                erhehrerherh
            </div>)
        }
    }
}

export default Assignee;