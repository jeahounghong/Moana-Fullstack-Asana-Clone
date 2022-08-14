import { SHOW_NEW_TEAM_FORM, CLOSE_MODAL, OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/ui_actions";

const preloadedState = {
    loading: false,
    modal: false,
    modalContent: null,
    sidebar: true
}

const uiReducer = (state = preloadedState, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type){
        case SHOW_NEW_TEAM_FORM:
            nextState.modalContent = SHOW_NEW_TEAM_FORM;
            nextState.modal = true;
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