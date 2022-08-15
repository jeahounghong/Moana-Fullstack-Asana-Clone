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

        console.log(this.props.team.teamProjects)

    }

    componentDidMount(){

    }

    toggleView(){
        this.setState({collapsed: !this.state.collapsed})  
    }

    collapsedView(){

        if (this.props.team.teamProjects.length > 0){
            return(
                <div>
                    <div className="sidebar-team-item">
                        <i className="fa-solid fa-caret-right" onClick={this.toggleView}></i>
                        <Link to={`/teams/${this.props.team.id}/show`}>{this.props.team.name}</Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="sidebar-team-item">
                        <i ></i>
                        <Link to={`/teams/${this.props.team.id}/show`}>{this.props.team.name}</Link>
                    </div>
                </div>
            )
        }
    }

    expandedView(){
        return (
            <div>
                <div className="sidebar-team-item">
                    <i className="fa-solid fa-caret-down" onClick={this.toggleView}></i>
                    <Link to={`/teams/${this.props.team.id}/show`}>{this.props.team.name}</Link>
                </div>
                <ul>
                    {this.props.team.teamProjects.map((projectId) => (
                        <Link to={`/projects/${projectId}/list`} key={projectId} >
                            <li className="sidebar-project-item">
                                <div>{this.props.projects[projectId].title}</div>
                                {this.props.projects[projectId].public ? "" : <i className="fa-solid fa-lock"></i>}
                            </li>
                        </Link>
                    ))}
                </ul>
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