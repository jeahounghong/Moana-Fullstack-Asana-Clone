import React from "react";
import {Draggable} from 'react-beautiful-dnd'

const Task = (props) => {
  // debugger;
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
          <i className={`fa-regular fa-circle-check`}></i> {props.task.title}
        </div>
      )}
    </Draggable>
  )
}

export default Task;