import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

export default (state = {}, action)=>{
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {[action.user.id]: action.user});
        case RECEIVE_USER:
            // debugger;
            nextState[action.user.id] =  action.user
            return nextState
        default:
            return state;
    }
}