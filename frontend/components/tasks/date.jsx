import React from 'react'

export default class DateComponent extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            input: false,
            value: null
        }

        this.MONTHS = {
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

        this.date = this.date.bind(this)
        this.toggleInput = this.toggleInput.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if (this.props.task && nextProps.task && this.props.task.id !== nextProps.task.id){
            // debugger;
            this.setState({value:null})
        }
    }

    toggleInput(){
        if (this.state.input){
            console.log("closed Input")
            let currentTask = Object.assign({},this.props.task);
            currentTask.owner_id = currentTask.owner_id || currentTask.ownerId;
            delete currentTask.ownerId;
            currentTask.due_date = document.getElementById("date-input").value
            delete currentTask.dueDate;
            currentTask.owner_type = currentTask.owner_type || currentTask.ownerType;
            delete currentTask.ownerType;
            currentTask.user_id = currentTask.userId;
            delete currentTask.userId;
            currentTask.title = currentTask.title;
            // debugger;
            this.props.updateTask(currentTask);

            this.setState({value: document.getElementById("date-input").value})
        }

        this.setState({input: !this.state.input})
        setTimeout(() => {
            let input = document.getElementById("date-input")
            if (input){
                input.select();
            }
        }, 0)
    }

    date(explicitDate){
        if (explicitDate){
            // debugger;
            if (this.state.input){
                return (<input type="date" 
                        defaultValue={explicitDate} 
                        id="date-input" 
                        className="task-show-open" 
                        onBlur={this.toggleInput}/>)
            } else {
                if (explicitDate){
                    let day = new Date();
                    day = day.getFullYear() + "-" + ((day.getMonth() + 1) < 10 ? "0" + (day.getMonth() + 1) : (day.getMonth() + 1)) + "-" + 
                        (day.getDate() < 10 ? ("0" + day.getDate()) : day.getDate())
                    // day = day.getDate()
                    // debugger;
                    return (<div className={`date task-show-open not-null ${explicitDate < day ? "late" : ""}`} onClick={this.toggleInput}>
                                <i className="fa-regular fa-calendar task-show-open"></i>
                        {" " + this.MONTHS[explicitDate.substring(5,7) - 1] + " " + explicitDate.substring(8,10)}
                    </div>)
                } else {
                    return (<div className='date task-show-open'
                                    onClick={this.toggleInput}
                        >
                            No Due Date
                    </div>)
                }
            }
        } else {
            if (this.state.input) {
                let dueDate;
                if (this.props.task && this.props.task.dueDate){
                    console.log("should put")
                    dueDate = this.props.task.dueDate.substring(0,10)
                }
                return (<input type="date" 
                        defaultValue={dueDate} 
                        id="date-input" 
                        className="task-show-open" 
                        onBlur={this.toggleInput}/>)
            } else {
                if (this.props.task){
                    if (this.props.task.dueDate){
                        let day = new Date()
                        day = day.getFullYear() + "-" + ((day.getMonth() + 1) < 10 ? "0" + (day.getMonth() + 1) : (day.getMonth() + 1)) + "-" + 
                        (day.getDate() < 10 ? ("0" + day.getDate()) : day.getDate())
                        return (<div className={`date task-show-open not-null ${this.props.task.dueDate < day ? "late" : ""}`}
                                    onClick={this.toggleInput}
                        >
                            <i className="fa-regular fa-calendar task-show-open"></i>
                            {" " + this.MONTHS[this.props.task.dueDate.substring(5,7) - 1] + " " + this.props.task.dueDate.substring(8,10)}
                        </div>)
                    } else {
                        return (<div className='date task-show-open'
                                    onClick={this.toggleInput}
                        >
                            No Due Date
                        </div>)
                    }
                } else {
                    return "Due..."
                }
            }
        }
    }

    render(){return(<div className="date-box task-show-open">
        {this.date(this.state.value)}
    </div>)}
}