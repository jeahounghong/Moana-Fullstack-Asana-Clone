import React from 'react';
import Column from './column';
import Task from './task'
import {DragDropContext} from 'react-beautiful-dnd';
import { useState } from 'react';

function ProjectBoard(props) {
    
    const [tasks, setTasks] = useState(props.tasks)
    console.log("board tasks")
    console.log(props.tasks)

    const initialColumns = {};
    initialColumns['Project'+props.projectId] = {
        id: 'Project'+props.projectId,
        type: 'Project',
        typeId: props.projectId,
        title: 'To Do',
        // tasks: ['item 1', 'item 2', 'item 3']
        tasks: []
    }

    if (Object.keys(props.projects).length > 0){
        // debugger;
        props.projects[props.projectId].projectTasks.forEach((id) => {
            // debugger;
            initialColumns['Project'+props.projectId].tasks.push(props.tasks[id])
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
            projectTasks = projectTasks.filter((task) => task)
            initialColumns['Section'+section.id] = {
                id: 'Section'+section.id,
                type: 'Section',
                typeId: section.id,
                title: section.title,
                // tasks: [],
                tasks: projectTasks,
            }
        }
    })
    
    const [columns, setColumns] = useState(initialColumns)

    if (Object.keys(initialColumns).length !== Object.keys(columns).length){
        setColumns(initialColumns);
    } else {
        let sumColTasks = 0;
        let sumInitialColTasks = 0;
        Object.values(initialColumns).forEach((col) => {
            // debugger;
            if (columns[col.id].tasks === undefined){
                
                setColumns(initialColumns);
            } else if (col.tasks.length !== columns[col.id].tasks.length){
                // setColumns(initialColumns);
            }
            sumInitialColTasks += col.tasks.length;
        })

        Object.values(columns).forEach((col) => {
            sumColTasks += col.tasks.length
        })

        if (sumColTasks !== sumInitialColTasks){
            // debugger;
            setColumns(initialColumns);
        }
    }


    const onDragEnd = ({source, destination}) => {
        if (destination === undefined || destination === null){
            return;
        }
        if (source.droppableId === destination.droppableId && destination.index === source.index){
            return;
        }

        let movedTask = Object.assign({},columns[source.droppableId].tasks[source.index])
        const finalType = destination.droppableId.substring(0,7);
        const finalTypeId = parseInt(destination.droppableId.substring(7))
        // console.log(finalType);
        // console.log(finalTypeId);
        console.log(movedTask)
        movedTask.ownerId = finalTypeId;
        movedTask.ownerType = finalType;
        console.log(movedTask)
        props.updateTask(movedTask);
        // debugger;

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
                tasks: newTasks,
                type: start.type,
                typeId: start.typeId,
                title: start.title
            }

            // debugger;
            setColumns(state => ({...state, [newCol.id]: newCol}))
            console.log("passed")
            // debugger;
            return null;
        } else {
            // DIFFERENT COLUMN MIGRATION
            // debugger;
            const newStartTasks = start.tasks.filter((task, idx) => (
                idx !== source.index
            ))

            const newStartCol = {
                id: start.id,
                tasks: newStartTasks,
                type: start.type,
                typeId: start.typeId,
                title: start.title
            }

            // debugger;

            const newEndTasks = end.tasks;

            newEndTasks.splice(destination.index, 0, start.tasks[source.index])

            const newEndCol = {
                id: end.id,
                tasks: newEndTasks,
                type: end.type,
                typeId: end.typeId,
                title: end.title
            }

            setColumns(state => ({
                ...state,
                [newEndCol.id]: newEndCol,
                [newStartCol.id]: newStartCol,
            }))

            console.log("passed")
            // debugger
            return null;

        }

        return null;
    }

    const createNewTask = (task) => {
        console.log("hello?")
        props.createTask(task);


        setTimeout(() => {
            console.log("timouet")
            console.log(columns)
            console.log(setColumns)
            console.log(props.tasks)
            setColumns(columns)
        }, 1500)

        setTimeout(() => {
            console.log(props.tasks)
        }, 5000)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='project-board right-most'>
                {Object.values(columns).map((col) => (
                    <Column col={col} key={col.id} 
                            showNewTaskForm={props.showNewTaskForm} 
                            createNewTask={createNewTask}
                            fetchSectionTasks={props.fetchSectionTasks}
                            fetchProjectTasks={props.fetchProjectTasks}
                            showUpdateTaskForm={props.showUpdateTaskForm}
                            />
                ))}
            </div>
        </DragDropContext>
    )
}

export default ProjectBoard;