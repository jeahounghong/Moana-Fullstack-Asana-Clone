import React from "react";
import { Link } from "react-router-dom";

class TeamShow extends React.Component {

    constructor(props){
        super(props);
        // console.log(props)
        this.people = this.people.bind(this);

    }

    componentDidMount(){
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

            if (this.props.team && this.props.team.teamUsers){
                this.props.team.teamUsers.forEach((user)=>{
                    this.props.fetchUser(user)
                })
            }

        }, 500)

        setTimeout(() => {
            if (this.props.team && this.props.team.teamUsers){
                this.props.team.teamUsers.forEach((user)=>{
                    this.props.fetchUser(user)
                })
            }
        },2000)
    }

    people(){
        if (this.props.team && this.props.team.teamUsers){
            // debugger;
            return (
                <ul className="people-box-container">
                    <li className="add-box" onClick={() => {
                        this.props.showAddTeamUserForm(this.props.team.id)}
                    }> 
                        <div className="add-icon">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                        <div>
                            Add User
                        </div>
                    </li>
                    {this.props.team.teamUsers.map((userId) => (
                        this.props.users && this.props.users[userId] ? 
                            <li className="people-box">
                            <div className="initials">
                                {this.props.users[userId].firstName[0] + this.props.users[userId].lastName[0]}
                            </div>
                            <div >
                                {this.props.users[userId].firstName}
                            </div>
                            <div >
                                {this.props.users[userId].lastName}
                            </div>
                        </li> : ""
                    ))}
                </ul>
            )
        }
    }


    render(){return(
        <div className="team-show">
            <div className="team-show-left">
                <div>
                    <h3>Description:</h3>
                    <section className="team-show-description" contentEditable={true}>
                        {this.props.team ? this.props.team.description : ""}
                    </section>
                </div>
                <div className="people">
                    <h3>People</h3>
                    <div >
                        {this.people()}
                    </div>
                </div>
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
                        (this.props.team && this.props.team.id) ? Object.values(this.props.projects).map((project) => {
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
                        }) : ""
                    }
                </ul>
                
            </div>
        </div>
    )}
}

export default TeamShow;