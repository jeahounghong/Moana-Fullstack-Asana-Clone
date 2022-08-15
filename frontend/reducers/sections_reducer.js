import { RECEIVE_SECTION, RECEIVE_SECTIONS } from "../actions/section_actions";


const SectionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_SECTIONS:
            Object.values(action.sections).forEach((section) => {
                nextState[section.id] = section
            })
            return nextState;
        
        case RECEIVE_SECTION:
            nextState[action.section.id] = action.section;
            return nextState;
        default:
            return state;
    }
}

export default SectionsReducer;