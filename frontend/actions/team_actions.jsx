import * as TeamApiUtil  from "../util/team_api_util";

export const RECEIVE_TEAM = "RECEIVE_TEAM";

const receiveTeam = (team) => ({
    type: RECEIVE_TEAM,
    team
})

export const createTeam = (team) => dispatch => TeamApiUtil.createTeam(team)
    .then(team => dispatch(receiveTeam(team)))

export const printTeam = (team) => (console.log(team))