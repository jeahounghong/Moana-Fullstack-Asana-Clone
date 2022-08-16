import { RECEIVE_TASK, RECEIVE_TASKS, REMOVE_TASK } from "../actions/task_actions";

const TaskReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_TASK:
            nextState[action.task.id] = action.task;
            return nextState;

        case RECEIVE_TASKS:
            Object.values(action.tasks).forEach((task) => {
                nextState[task.id] = task;
            })
            return nextState;

        case REMOVE_TASK:
            delete nextState[action.taskId];
            return nextState;

        default:
            return state;
    }
}

export default TaskReducer;