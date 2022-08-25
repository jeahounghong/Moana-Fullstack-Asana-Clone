import React from "react";
import {Draggable} from 'react-beautiful-dnd'

const Task = (props) => {
  // debugger;

  const MONTHS = {
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

  const dueDate = (date) =>{
    // let day = new Date();
    // day = day.getFullYear() + "-" + ((day.getMonth() + 1) < 10 ? "0" + (day.getMonth() + 1) : (day.getMonth() + 1)) + "-" + 
    //                 (day.getDate() < 10 ? ("0" + day.getDate()) : day.getDate())
    return (<div>
        {date ? (" " + MONTHS[date.substring(5,7) - 1] + " " + date.substring(8,10)) : " No Due Date"}
    </div>)
  }

  let day = new Date();
  const today = day.getFullYear() + "-" + ((day.getMonth() + 1) < 10 ? "0" + (day.getMonth() + 1) : (day.getMonth() + 1)) + "-" + 
                  (day.getDate() < 10 ? ("0" + day.getDate()) : day.getDate())


  return(
    <Draggable draggableId={"task" + props.task.id} index={props.index} >
      {(provided) => (
        <div ref={provided.innerRef} 
            {...provided.dragHandleProps} 
            {...provided.draggableProps}
            className="project-board-task"
            onClick={(e) => {
              // setTimeout(() => props.showUpdateTaskForm(props.task), 0)
              props.showUpdateTaskForm(props.task)
            }}
        >
          <div className="left task-show-open">
            <span className={`task-show-open title ${props.task.complete ? "complete" : ""}`}><i className={`fa-regular fa-circle-check ${props.task.complete ? "complete" : ""}`}></i> 
            {props.task.title}</span>
            <span className={`task-show-open date ${props.task.dueDate < today ? "late" : "on-time"}`}>{dueDate(props.task.dueDate)}</span>
          </div>

          <div className="right task-show-open">
              {props.users && props.users[props.task.userId] ? 
                <div className="task-show-open profile-circle">
                {props.users[props.task.userId].firstName[0] + props.users[props.task.userId].lastName[0]}
                </div>
              : ""}
          </div>
          
        </div>
      )}
    </Draggable>
  )
}

export default Task;