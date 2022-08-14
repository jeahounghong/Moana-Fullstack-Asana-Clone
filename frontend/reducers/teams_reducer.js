import { RECEIVE_TEAM, RECEIVE_USER_TEAMS } from "../actions/team_actions";

const TeamsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_TEAM:
            nextState[action.team.id] = action.team;
            return nextState;
        case RECEIVE_USER_TEAMS:
            Object.values(action.teams).forEach((team)=>{
                nextState[team.id] = team
            })
            return nextState;
        default:
            return state;
    }
}

export default TeamsReducer;