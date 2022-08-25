import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {

    constructor(props){
        super(props);
        this.date = new Date();
        this.projects = this.projects.bind(this);
    }

    projects(){
        if (this.props.projects && Object.keys(this.props.projects).length > 1){
            const projects = Object.values(this.props.projects).map((project) => 
                <li>
                    <Link to={`/projects/${project.id}/overview`}>
                        <div className="project-box">
                            <i class="fa-solid fa-diagram-project"></i>
                        </div>
                        <span>
                            {project.title}
                        </span>
                    </Link>
                </li>)
            return (<ul>
                {projects}
            </ul>)
        }
    }

    weekday(day){
        const weekday = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday"
        }
        return weekday[day]
    }

    month(mon){
        const months= {
            0: "January",
            1: "February",
            2: "March",
            3: "April",
            4: "May",
            5: "June",
            6: "July",
            7: "August",
            8: "September",
            9: "October",
            10: "November",
            11: "December"
        }

        return months[mon];
    }

    render(){return (
        <div id="home-screen" className="right-most">
            <div className="welcome-greeting">
                <div className="date">{this.weekday(this.date.getDay())}, {this.month(this.date.getMonth())} {this.date.getDate()}</div>
                <p>Welcome, {this.props.currentUser.firstName}.</p>
            </div>

            <div className="priorities-projects-people">
                <div className="priorities-projects">
                    <div className="priorities">
                        <h1>My Priorities</h1>
                        
                    </div>
                    <div className="projects">
                        <h1>My Projects</h1>
                        {this.projects()}
                    </div>
                </div>

                <div className="people">
                    <h1>People</h1>
                    
                </div>
            </div>
        </div>
    )}
}

export default Home;