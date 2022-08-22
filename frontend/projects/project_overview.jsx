import React from "react";

export default class ProjectOverview extends React.Component {

    constructor(props){
        super(props);
        this.description = this.description.bind(this);
    }

    description(){
        if (Object.keys(this.props.projects).length > 0){
            return (<div className="description-text">
                {this.props.projects[this.props.projectId].description}
            </div>)
        }
    }



    render(){return(
        <div id="project-overview" className="right-most">
        
            <div className="project-overview-content">
                <div className="left-content">
                    <div className="project-overview-description">
                        <h1>Description</h1>
                        {this.description()}
                    </div>
                    <div className="people">
                        <h1>People</h1>
                        
                    </div>
                </div>

                <div className="right-content">
                    <h1>Project Tasks</h1>
                </div>

            </div>
        </div>
    )}
}