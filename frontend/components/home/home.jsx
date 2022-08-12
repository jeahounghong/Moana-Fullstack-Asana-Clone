import React from "react";

class Home extends React.Component {

    constructor(props){
        super(props);
    }

    render(){return (
        <div>
            <div>Welcome, {this.props.currentUser.username}</div>
            <button onClick={() => this.props.logoutUser(this.props.currentUser.id)}>Logout</button>
        </div>
    )}
}

export default Home;