import React from 'react';
import Column from './column';
import Task from './task'
import {DragDropContext} from 'react-beautiful-dnd';
import { useState } from 'react';

function ProjectBoard() {

    const [tasks, setTasks] = useState(['Item 1', 'Item 2', 'Item 3']);
    // const tasks = ['Item 1', 'Item 2', 'Item 3'];

    const initialColumns = {
        todo: {
          id: 'todo',
          tasks: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5' , 'item 6', 'item 7']
        },
        doing: {
          id: 'doing',
          tasks: []
        },
        done: {
          id: 'done',
          tasks: []
        }
    }

    const [columns, setColumns] = useState(initialColumns)


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
            <div className='project-board'>
                {Object.values(columns).map((col) => (
                    <Column col={col} key={col.id}/>
                ))}
            </div>
        </DragDropContext>
    )
}

export default ProjectBoard;