import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from "../actions/session_actions";

export default (state =[], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ERRORS:
            console.log(action.errors)
            return Object.assign({}, action.errors.responseJSON);
            
        case RECEIVE_CURRENT_USER:
            return {};
            
        case CLEAR_ERRORS:
            return {};

            
        default:
            return state;
    }
}