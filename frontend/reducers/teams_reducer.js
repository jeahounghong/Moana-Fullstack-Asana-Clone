import { RECEIVE_TEAM } from "../actions/team_actions";

const TeamsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_TEAM:
            debugger;
            nextState[action.team.id] = action.team;
            return nextState;
        default:
            return state;
    }
}

export default TeamsReducer