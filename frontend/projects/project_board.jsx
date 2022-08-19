import React from 'react';
import Column from './column';
import Task from './task'
import {DragDropContext} from 'react-beautiful-dnd';
import { useState } from 'react';

function ProjectBoard(props) {

    const initialColumns = {
        // todo: {
        //   id: 'todo',
        //   tasks: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5' , 'item 6', 'item 7']
        // },
        // doing: {
        //   id: 'doing',
        //   tasks: []
        // },
        // done: {
        //   id: 'done',
        //   tasks: []
        // },
        // started: {
        //   id: 'started',
        //   tasks: []
        // },
        // sent: {
        //   id: 'sent',
        //   tasks: []
        // }
    }

    console.log(props)
    console.log(props)
    
    initialColumns['To Do'] = {
        id: 'To Do',
        type: 'project',
        typeId: props.project ? props.project.id : null,
        tasks: ['item 1', 'item 2', 'item 3']
    }
    
    
    Object.values(props.sections).forEach((section) => {
        
        // setColumns(Object.assign(columns, {[section.title]: {
        //     id: section.title,
        //     type: 'section',
        //     typeId: section.id,
        //     tasks: []
        // }}))
        initialColumns[section.title] = {
                id: section.title,
                type: 'section',
                typeId: section.id,
                tasks: []
            }
    })
    
    const [columns, setColumns] = useState(initialColumns)
    if (Object.keys(initialColumns).length !== Object.keys(columns).length){
        console.log("difference")
        setColumns(initialColumns);
    }

    const onDragEnd = ({source, destination}) => {
        if (destination === undefined || destination === null){
            return;
        }
        if (source.droppableId === destination.droppableId && destination.index === source.index){
            return;
        }

        const start = columns[source.droppableId]
        const end = columns[destination.droppableId]

        // SAME COLUMN MIGRATION
        if (start === end){
            const newTasks = start.tasks.filter((task,idx) => (
                idx !== source.index
            ))
            newTasks.splice(destination.index, 0 , start.tasks[source.index])
            const newCol = {
                id: start.id,
                tasks: newTasks
            }
            setColumns(state => ({...state, [newCol.id]: newCol}))
            return null;
        } else {
            // DIFFERENT COLUMN MIGRATION

            const newStartTasks = start.tasks.filter((task, idx) => (
                idx !== source.index
            ))

            const newStartCol = {
                id: start.id,
                tasks: newStartTasks
            }

            const newEndTasks = end.tasks;

            newEndTasks.splice(destination.index, 0, start.tasks[source.index])

            const newEndCol = {
                id: end.id,
                tasks: newEndTasks
            }

            setColumns(state => ({
                ...state,
                [newStartCol.id]: newStartCol,
                [newEndCol.id]: newEndCol
            }))

        }

        return null;

        // const newTasks = tasks.filter((task,index) => index !== source.index)
        // newTasks.splice(destination.index, 0 , tasks[source.index])
        // setTasks(newTasks)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='project-board right-most'>
                {Object.values(columns).map((col) => (
                    <Column col={col} key={col.id} showNewTaskForm={props.showNewTaskForm}/>
                ))}
            </div>
        </DragDropContext>
    )
}

export default ProjectBoard;