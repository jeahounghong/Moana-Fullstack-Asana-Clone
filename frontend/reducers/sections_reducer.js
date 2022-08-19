import { RECEIVE_SECTION, RECEIVE_SECTIONS, REMOVE_SECTION } from "../actions/section_actions";


const SectionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_SECTIONS:
            // debugger;
            Object.values(action.sections).forEach((section) => {
                nextState[section.id] = section
            })
            // debugger;
            return nextState;
        
        case RECEIVE_SECTION:
            nextState[action.section.id] = action.section;
            return nextState;

        case REMOVE_SECTION:
            delete nextState[action.sectionId];
            return nextState;

        default:
            return state;
    }
}

export default SectionsReducer;