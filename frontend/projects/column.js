import Task from './task';
import React from 'react';
import {Droppable} from 'react-beautiful-dnd'

const Column = ({col: {tasks, id}}) => {

    return(
        <Droppable droppableId={id}>
            {(provided) => (
                <div className='project-board-column-container'>
                    <h2 className='project-board-section-title'>{id}</h2>
                    <div ref={provided.innerRef} {...provided.droppableProps} className='project-board-column'>
                        {tasks.map((task, index) => (
                            <Task key={task} text={task} index={index}/>
                        ))}
                        {provided.placeholder}
                    </div>
                </div>
            )}
        </Droppable>
        
    )
}

export default Column;