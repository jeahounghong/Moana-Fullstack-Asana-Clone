import React from "react";
import { Link } from "react-router-dom";

class TeamShow extends React.Component {

    constructor(props){
        super(props);
        console.log(props)
    }

    componentDidMount(){
        console.log(this.props.currentUser)
        this.props.fetchUserProjects(this.props.currentUser)

    }

    render(){return(
        <div className="team-show">
            <div className="team-show-left">
                <h3>Description:</h3>
                {this.props.team ? this.props.team.description : ""}
            </div>

            <div className="team-show-projects right-most">
                <div className="team-show-projects-label">Projects:</div>
                <div onClick={this.props.showNewProjectForm}>New Project</div>
                <ul>
                    {
                        Object.values(this.props.projects).map((project) => {
                            if (project.teamId === this.props.team.id){
                                return (
                                    <Link to={`/projects/${project.id}/list`} key={project.id} onClick={()=> this.props.fetchProjectSections(project.id)}>
                                        <li  className="team-show-projects-item">
                                            <div>{project.title}</div>
                                            <div>{project.description}</div>
                                        </li>
                                    </Link>
                                )
                            }
                        })
                    }
                </ul>
                
            </div>
        </div>
    )}
}

export default TeamShow;