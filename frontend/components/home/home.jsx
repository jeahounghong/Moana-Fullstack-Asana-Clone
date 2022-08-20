import React from "react";

class Home extends React.Component {

    constructor(props){
        super(props);
        this.date = new Date();
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
        </div>
    )}
}

export default Home;