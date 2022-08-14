import React from "react";

class TeamShow extends React.Component {

    constructor(props){
        super(props);
        console.log(props)
    }

    render(){return(
        <div className="team-show">
            <div className="team-show-description">
                <h3>Description:</h3>
                {this.props.team ? this.props.team.description : ""}
            </div>
        </div>
    )}
}

export default TeamShow;