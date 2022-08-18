import React from "react";
import { connect } from "react-redux";
import ProjectList from "./project_list";
import { createSection, deleteSection, fetchProjectSections, updateSection } from "../actions/section_actions";
import { fetchProjectTasks } from "../actions/task_actions";
import { Link } from "react-router-dom";
import ProjectBoard from "./project_board";

class Project extends React.Component {

    constructor(props){
        super(props)
        console.log(props)

        this.renderProject = this.renderProject.bind(this)
    }

    componentDidMount(){
        // this.props.fetchProjectTasks(this.props.project.id)
    }

    projectNavbar(){

        const path = this.props.location.pathname;
        const list = path.substring(path.length-4, path.length) === "list"
        const overview = path.substring(path.length-4, path.length) === "view"
        const board = path.substring(path.length-4, path.length) === "oard"
        const timeline = path.substring(path.length-4, path.length) === "line"
        const calendar = path.substring(path.length-4, path.length) === "ndar"
        
        return(
        <div className="second-navbar">
            <div className={`second-navbar-item ${overview ? "active" : ""}`}>
                <Link to={`/projects/${this.props.projectId}/overview`}>Overview</Link>
            </div>
            <div className={`second-navbar-item ${list ? "active" : ""}`}>
                <Link to={`/projects/${this.props.projectId}/list`}>List</Link>
            </div>
            <div className={`second-navbar-item ${board ? "active" : ""}`}>
                <Link to={`/projects/${this.props.projectId}/board`}>Board</Link>
            </div>
            <div className={`second-navbar-item ${timeline ? "active" : ""}`}>
                <Link to={`/projects/${this.props.projectId}/timeline`}>Timeline</Link>
            </div>
            <div className={`second-navbar-item ${calendar ? "active" : ""}`}>
                <Link to={`/projects/${this.props.projectId}/calendar`}>Calendar</Link>
            </div>
        </div>
    )}

    renderProject(path){
        
        switch(path.substring(path.length-4,path.length)){
            case "list":
                return <ProjectList {...this.props}/>
            case "oard":
                // console.log()
                return <ProjectBoard {...this.props}/>;
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
    path: ownProps.location.pathname,
    sections: state.entities.sections,
    projectId: ownProps.match.params.project_id
})

const mapDispatchToProps = dispatch => ({
    fetchProjectSections: (projectId) => dispatch(fetchProjectSections(projectId)),
    updateSection: (section) => dispatch(updateSection(section)),
    createSection: (section) => dispatch(createSection(section)),
    deleteSection: (sectionId) => dispatch(deleteSection(sectionId)),
    fetchProjectTasks: (projectId) => dispatch(fetchProjectTasks(projectId)),
    fetchSectionTasks: (sectionId) => dispatch(fetchSectionTasks(sectionId))
})

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Project);
export default ProjectContainer;