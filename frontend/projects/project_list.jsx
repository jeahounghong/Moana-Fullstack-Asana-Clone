import React from "react";

class ProjectList extends React.Component {

    constructor(props){
        super(props);

        this.description = this.description.bind(this);
    }

    description(){
        return(
            <div className="project-list-description">
                <h3>Description:</h3>
                <div>{this.props.project ? this.props.project.description : ""}</div>
            </div>
        )
    }

    render(){return(
        <div className="project-list">
            {this.description()}
        </div>
    )}
}

export default ProjectList;