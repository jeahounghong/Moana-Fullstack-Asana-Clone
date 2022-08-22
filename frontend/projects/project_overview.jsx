import React from "react";

export default class ProjectOverview extends React.Component {

    constructor(props){
        super(props);
        this.description = this.description.bind(this);
        this.people.bind(this);
    }

    description(){
        if (Object.keys(this.props.projects).length > 0){
            return (<div className="description-text">
                {this.props.projects[this.props.projectId].description}
            </div>)
        }
    }

    people(){
        if (this.props.projects[this.props.projectId] && Object.keys(this.props.users).length > 0){
            return (<ul>
                {/* lskdnlksdg */}
                <li className="add-box"> 
                    <div className="add-icon">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div>
                        Add User
                    </div>
                </li>
                {this.props.projects[this.props.projectId].projectUsers.map((userId) => (
                    this.props.users[userId] ? 
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
            </ul>)
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
                        {this.people()}
                    </div>
                </div>

                <div className="right-content">
                    <h1>Project Tasks</h1>
                </div>

            </div>
        </div>
    )}
}