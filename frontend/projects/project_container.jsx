import React from "react";
import { connect } from "react-redux";
import ProjectList from "./project_list";

class Project extends React.Component {

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

    render(){return(
        <div className="project-page">
            {this.projectNavbar()}
        </div>
    )}
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Project);
export default ProjectContainer;