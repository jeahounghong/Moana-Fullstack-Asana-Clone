import Task from './task';
import React from 'react';
import {Droppable} from 'react-beautiful-dnd'

const Column = (props) => {
    // console.log("show new task")
    // console.log(props.showNewTaskForm)

    const tasks = props.col.tasks
    const id = props.col.id
    return(
        <Droppable droppableId={id}>
            {(provided) => (
                <div className='project-board-column-container'>
                    <h2 className='project-board-section-title'>{id}</h2>
                    <div ref={provided.innerRef} {...provided.droppableProps} className='project-board-column'>
                        {tasks.map((task, index) => (
                            <Task key={task.id} text={task.title} index={index} task={task}/>
                        ))}
                        {provided.placeholder}
                        <div className="add-task" onClick={() => props.showNewTaskForm()}>
                            <label><i class="fa-regular fa-plus"></i>Add Task</label>
                        </div>
                    </div>
                    
                </div>
            )}
        </Droppable>
        
    )
}

export default Column;