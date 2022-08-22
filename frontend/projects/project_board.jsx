import React from 'react';
import Column from './column';
import Task from './task'
import {DragDropContext} from 'react-beautiful-dnd';
import { useState } from 'react';

function ProjectBoard(props) {
    // debugger;
    const initialColumns = {};
    initialColumns['To Do'] = {
        id: 'To Do',
        type: 'project',
        typeId: props.project ? props.project.id : null,
        // tasks: ['item 1', 'item 2', 'item 3']
        tasks: []
    }

    if (Object.keys(props.projects).length > 0){
        // debugger;
        props.projects[props.projectId].projectTasks.forEach((id) => {
            // debugger;
            initialColumns['To Do'].tasks.push(props.tasks[id])
        })
        // debugger;
    }
    
    let sections = Object.values(props.sections).filter((section) => section.projectId === props.projectId)
    
    
    sections.forEach((section) => {
        let projectTasks = [];
        if (Object.keys(props.tasks).length > 0){
            projectTasks = section.sectionTasks.map((taskId) => (
                props.tasks[taskId]
            ))
            
            // if (Object.values(props.tasks).length > 3){
            //     debugger;
            // }
            projectTasks = projectTasks.filter((task) => task)
            // debugger;
    
            initialColumns[section.title] = {
                id: section.title,
                type: 'section',
                typeId: section.id,
                // tasks: [],
                tasks: projectTasks,
            }
        }
    })
    // debugger;
    
    const [columns, setColumns] = useState(initialColumns)

    if (Object.keys(initialColumns).length !== Object.keys(columns).length){
        setColumns(initialColumns);
    } else {
        Object.values(initialColumns).forEach((col) => {
            // debugger;
            if (columns[col.id].tasks === undefined){
                setColumns(initialColumns);
            } else if (col.tasks.length !== columns[col.id].tasks.length){
                // debugger;
                setColumns(initialColumns);
            }
        })
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