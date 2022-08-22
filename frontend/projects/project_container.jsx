import React from "react";
import { connect } from "react-redux";
import ProjectList from "./project_list";
import { createSection, deleteSection, fetchProjectSections, updateSection } from "../actions/section_actions";
import { createTask, fetchProjectTasks, fetchSectionTasks, updateTask } from "../actions/task_actions";
import { Link } from "react-router-dom";
import ProjectBoard from "./project_board";
import { showNewTaskForm, showUpdateTaskForm } from "../actions/ui_actions";
import ProjectOverview from "./project_overview";
import { fetchUser } from "../actions/user_actions";

class Project extends React.Component {

    constructor(props){
        super(props)
        console.log("container-props")
        console.log(props)
        this.renderProject = this.renderProject.bind(this)
        this.props.fetchProjectSections(parseInt(this.props.projectId))
        this.props.fetchProjectTasks(this.props.projectId)
        if (Object.keys(this.props.projects).length > 0) {
            this.props.projects[this.props.projectId].projectSections.forEach((id) => {
                this.props.fetchSectionTasks(id)
            })
        }
    }

    componentWillReceiveProps(nextProps){

    }

    componentDidMount(){
        setTimeout(() => {
            this.props.fetchProjectSections(parseInt(this.props.projectId));
            this.props.fetchProjectTasks(parseInt(this.props.projectId));
        }, 10)
        setTimeout(() => {
            let projects = this.props.projects;
            // debugger;
            if (projects) {
                // debugger
                projects[this.props.projectId].projectSections.forEach((id) => {
                    this.props.fetchSectionTasks(id)
                })
            }
        }, 1500)
        setTimeout(() => {
            let projects = this.props.projects;
            // debugger;
            if (projects) {
                // debugger
                projects[this.props.projectId].projectSections.forEach((id) => {
                    this.props.fetchSectionTasks(id)
                })
            }
        }, 2500)

        setTimeout(() => {
            if (this.props.projects && this.props.projects[this.props.projectId]){
                this.props.projects[this.props.projectId].projectUsers.forEach((userId) => {
                    // debugger;
                    this.props.fetchUser(userId)
                })
            }
        }, 1500)
        setTimeout(() => {
            if (this.props.projects && this.props.projects[this.props.projectId]){
                this.props.projects[this.props.projectId].projectUsers.forEach((userId) => {
                    // debugger;
                    this.props.fetchUser(userId)
                })
            }
        }, 0)
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
            <Link to={`/projects/${this.props.projectId}/overview`}>
                <div className={`second-navbar-item ${overview ? "active" : ""}`}>
                    Overview
                </div>
            </Link>
            <Link to={`/projects/${this.props.projectId}/list`}>
                <div className={`second-navbar-item ${list ? "active" : ""}`}>
                    List
                </div>
            </Link>
            <Link to={`/projects/${this.props.projectId}/board`}>
                <div className={`second-navbar-item ${board ? "active" : ""}`}>
                    Board
                </div>
            </Link>
            <Link to={`/projects/${this.props.projectId}/timeline`}>
                <div className={`second-navbar-item ${timeline ? "active" : ""}`}>
                    Timeline
                </div>
            </Link>
            <Link to={`/projects/${this.props.projectId}/calendar`}>
                <div className={`second-navbar-item ${calendar ? "active" : ""}`}>
                    Calendar
                </div>
            </Link>
        </div>
    )}

    renderProject(path){
        
        switch(path.substring(path.length-4,path.length)){
            case "list":
                return <ProjectList {...this.props}/>
            case "oard":
                if (this.props.sections){
                    return <ProjectBoard {...this.props}/>;
                }
            case "view":
                return <ProjectOverview {...this.props}/>;
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
    projects: state.entities.projects,
    path: ownProps.location.pathname,
    sections: state.entities.sections,
    projectId: parseInt(ownProps.match.params.project_id),
    tasks: state.entities.tasks,
    users: state.entities.users
})

const mapDispatchToProps = dispatch => ({
    fetchProjectSections: (projectId) => dispatch(fetchProjectSections(projectId)),
    updateSection: (section) => dispatch(updateSection(section)),
    createSection: (section) => dispatch(createSection(section)),
    deleteSection: (sectionId) => dispatch(deleteSection(sectionId)),
    fetchProjectTasks: (projectId) => dispatch(fetchProjectTasks(projectId)),
    fetchSectionTasks: (sectionId) => dispatch(fetchSectionTasks(sectionId)),
    showNewTaskForm: () => dispatch(showNewTaskForm()),
    showUpdateTaskForm: (task) => dispatch(showUpdateTaskForm(task)),
    createTask: (task) => dispatch(createTask(task)),
    updateTask: (task) => dispatch(updateTask(task)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Project);
export default ProjectContainer;