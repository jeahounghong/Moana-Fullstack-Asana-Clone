import React from "react";
import { Link } from "react-router-dom";

class TeamSidebarItem extends React.Component {

    constructor(props){
        super(props);
        this.state={
            collapsed: true
        }

        this.collapsedView = this.collapsedView.bind(this);
        this.expandedView = this.expandedView.bind(this);
        this.toggleView = this.toggleView.bind(this);

        // console.log(this.props.team.teamProjects)

    }

    componentDidMount(){

    }

    toggleView(e){
        e.preventDefault()
        this.setState({collapsed: !this.state.collapsed})  
    }

    collapsedView(){

        if (this.props.team.teamProjects.length > 0){
            return(
                <div className="sidebar-team">
                    <div className="sidebar-team-item">
                        <Link to={`/teams/${this.props.team.id}/show`}><i className="fa-solid fa-caret-right spacer" onClick={this.toggleView}></i>{this.props.team.name}</Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="sidebar-team">
                    <div className="sidebar-team-item">
                        <Link className="no-projects" to={`/teams/${this.props.team.id}/show`}><div className="spacer"></div>{this.props.team.name}</Link>
                    </div>
                </div>
            )
        }
    }

    expandedView(){
        return (
            <div className="sidebar-team">
                <div className="sidebar-team-item">
                    <Link to={`/teams/${this.props.team.id}/show`}><i className="fa-solid fa-caret-down" onClick={this.toggleView}></i>{this.props.team.name}</Link>
                </div>
                <div className="sidebar-projects">
                    <ul >
                        {this.props.team.teamProjects.map((projectId) => (
                            this.props.projects[projectId] ? <Link to={`/projects/${projectId}/list`} key={projectId} onClick={() => this.props.fetchProjectSections(projectId)}>
                                <li className="sidebar-project-item">
                                    <div>
                                        {this.props.projects[projectId].title}
                                        {this.props.projects[projectId].public ? "" : <i className="fa-solid fa-lock"></i>}
                                    </div>
                                </li>
                            </Link> : ""
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    render(){
        if (this.state.collapsed){
            return this.collapsedView();
        } else {
            return this.expandedView();
        }
    }
}
export default TeamSidebarItem;


{/* <div>
            <Link to={`/teams/${this.props.team.id}/show`}>{this.props.team.name}</Link>
        </div> */}