import React from "react";
import { Link } from "react-router-dom";

class TeamShow extends React.Component {

    constructor(props){
        super(props);
        console.log(props)
    }

    componentDidMount(){
        // console.log(this.props.currentUser)
        this.props.fetchUserProjects(this.props.currentUser)

        setTimeout(() => {
            const contents = $(".team-show-description")
            contents.blur(()=>{
              console.log(contents[0].innerHTML)
              let teamCopy = Object.assign({}, this.props.team)
              teamCopy.description = contents[0].innerHTML
              this.props.updateTeam(teamCopy)
            })
            contents.keydown((e) => {
                if (e.keyCode === 13){
                    e.preventDefault();
                }
            })
        }, 500)

        

    }

    render(){return(
        <div className="team-show">
            <div className="team-show-left">
                <h3>Description:</h3>
                <section className="team-show-description" contentEditable={true}>
                    {this.props.team ? this.props.team.description : ""}
                </section>
            </div>

            <div className="team-show-projects right-most">
                <div className="team-show-projects-label">Projects:</div>
                
                <ul>
                    <li onClick={this.props.showNewProjectForm}>
                        <div className="project-square new-project">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <p>New Project</p>
                    </li>
                    {
                        Object.values(this.props.projects).map((project) => {
                            if (project.teamId === this.props.team.id){
                                return (
                                    <Link to={`/projects/${project.id}/list`} key={project.id} onClick={()=> this.props.fetchProjectSections(project.id)}>
                                        <li  className="team-show-projects-item" >
                                            <div className="project-square actual-projects">
                                                <i class="fa-solid fa-diagram-project"></i>
                                            </div>
                                            <p>{project.title}</p>
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