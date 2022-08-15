import React from "react";
import { connect } from "react-redux";
import ProjectList from "./project_list";

class Project extends React.Component {

    constructor(props){
        super(props)
        console.log(props)

        this.renderProject = this.renderProject.bind(this)
    }

    projectNavbar(){return(
        <div className="project-navbar">
            <div>
                Overview
            </div>
            <div>
                List
            </div>
            <div>
                Board
            </div>
            <div>
                Timeline
            </div>
            <div>
                Calendar
            </div>
        </div>
    )}

    renderProject(path){
        switch(path){
            case "/projects/:project_id/list":
                return <ProjectList {...this.props}/>
            default: 
                return ""
        }
    }

    render(){return(
        <div className="project-page">
            {this.projectNavbar()}
            {this.renderProject(this.props.path)}
        </div>
    )}
}

const mapStateToProps = (state, ownProps) => ({
    project: state.entities.projects[ownProps.match.params.project_id],
    path: ownProps.match.path
})

const mapDispatchToProps = dispatch => ({

})

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Project);
export default ProjectContainer;