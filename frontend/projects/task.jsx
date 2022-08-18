import React from "react";
import {Draggable} from 'react-beautiful-dnd'

const Task = (props) => {

  return(
    <Draggable draggableId={props.text} index={props.index} >
      {(provided) => (
        <div ref={provided.innerRef} 
            {...provided.dragHandleProps} 
            {...provided.draggableProps}
            className="project-board-task"
        >
          <i class="fa-regular fa-circle-check"></i> {props.text}
        </div>
      )}
    </Draggable>
  )
}

export default Task;