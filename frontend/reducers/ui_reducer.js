import { SHOW_NEW_PROJECT_FORM,SHOW_NEW_TEAM_FORM, CLOSE_MODAL, OPEN_SIDEBAR, CLOSE_SIDEBAR,
            SHOW_UPDATE_PROJECT_FORM, SHOW_UPDATE_TEAM_FORM, SHOW_NEW_TASK_FORM, CLOSE_TASK_SHOW, SHOW_UPDATE_TASK_FORM,
            SHOW_ADD_PROJECT_USER_FORM, SHOW_ADD_TEAM_USER_FORM 
        } from "../actions/ui_actions";

const preloadedState = {
    loading: false,
    modal: false,
    modalContent: null,
    sidebar: true,
    modalTeam: null,
    modalProject: null,
    taskShow: false,
    taskContent: {
        title: "",
        description: "",
        due_date: null,
        complete: false,
        subtasks: []
    },
}

const uiReducer = (state = preloadedState, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type){
        case SHOW_NEW_TEAM_FORM:
            nextState.modalContent = SHOW_NEW_TEAM_FORM;
            nextState.modal = true;
            return nextState;

        case SHOW_UPDATE_TEAM_FORM:
            nextState.modalContent = SHOW_UPDATE_TEAM_FORM;
            nextState.modalTeam = action.teamId;
            nextState.modal=true;
            return nextState;
        
        case SHOW_NEW_PROJECT_FORM:
            nextState.modalContent = SHOW_NEW_PROJECT_FORM;
            nextState.modal = true;
            return nextState;

        case SHOW_UPDATE_PROJECT_FORM:
            nextState.modalContent = SHOW_UPDATE_PROJECT_FORM;
            nextState.modalProject = action.projectId;
            nextState.modal = true;
            return nextState;

        case SHOW_NEW_TASK_FORM:
            nextState.taskShow = true;
            nextState.taskContent = {
                title: "",
                description: "",
                dueDate: null,
                complete: false,
                
            };
            let taskform = document.getElementById("task-show-container");
            taskform.style.width="45%";
            return nextState;

        case SHOW_UPDATE_TASK_FORM:
            nextState.taskShow = true;
            nextState.taskContent = action.task;
            // debugger;
            taskform = document.getElementById("task-show-container");
            taskform.style.width="45%";
            return nextState;

        case SHOW_ADD_TEAM_USER_FORM:
            nextState.modalContent = SHOW_ADD_TEAM_USER_FORM;
            nextState.modalTeam = action.teamId;
            nextState.modal = true;
            // debugger;
            return nextState;

        case CLOSE_TASK_SHOW:
            // debugger;
            nextState.taskShow = false;
            nextState.taskContent = null;
            taskform = document.getElementById("task-show-container");
            // debugger;
            taskform.style.width="0%";
            return nextState;

        case CLOSE_MODAL:
            nextState.modal = false;
            nextState.modalContent = null;
            return nextState;

        case OPEN_SIDEBAR:
            nextState.sidebar = true;
            return nextState;

        case CLOSE_SIDEBAR:
            nextState.sidebar = false;
            return nextState;

        default: 
            return state;
    }
}

export default uiReducer;