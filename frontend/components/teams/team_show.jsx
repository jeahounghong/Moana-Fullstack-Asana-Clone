import React from "react";

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
            <div className="team-show-description">
                <h3>Description:</h3>
                {this.props.team ? this.props.team.description : ""}
            </div>

            <div className="team-show-projects">
                <div>Projects:</div>
                <ul>
                    {
                        Object.values(this.props.projects).map((project) => {
                            if (project.teamId === this.props.team.id){
                                return (
                                    <li key={project.id} className="team-show-projects-item">
                                        <div>{project.title}</div>
                                        <div>{project.description}</div>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <div onClick={this.props.showNewProjectForm}>New Project</div>
            </div>
        </div>
    )}
}

export default TeamShow;