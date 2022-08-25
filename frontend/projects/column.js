import Task from './task';
import React from 'react';
import {Droppable} from 'react-beautiful-dnd'

const Column = (props) => {
    // console.log("show new task")
    // console.log(props.showNewTaskForm)

    const tasks = props.col.tasks
    const title= props.col.title
    const id = props.col.id

    const createNewTaskColumn = () => {
        let newTask = {
            ownerId: parseInt(props.col.typeId),
            ownerType: props.col.type
        }
        debugger;
        props.createNewTask();

        if (newTask.ownerType === "Project"){
            // debugger;
            props.fetchProjectTasks(newTask.ownerId)
        }else {
            // debugger;
            props.fetchSectionTasks(newTask.ownerId)
        }
    }

    return(
        <Droppable droppableId={id}>
            {(provided) => (
                <div className='project-board-column-container'>
                    <h2 className='project-board-section-title'>{title}</h2>
                    <div ref={provided.innerRef} {...provided.droppableProps} className='project-board-column'>
                        {tasks.map((task, index) => (
                            <Task key={task.id} text={task.title} index={index} task={task} showUpdateTaskForm={props.showUpdateTaskForm} users={props.users}/>
                        ))}
                        {provided.placeholder}
                        <div className="add-task" onClick={() => createNewTaskColumn()}>
                            <label><i class="fa-regular fa-plus"></i>Add Task</label>
                        </div>
                    </div>
                    
                </div>
            )}
        </Droppable>
        
    )
}

export default Column;