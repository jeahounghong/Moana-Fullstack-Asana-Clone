import * as TeamApiUtil  from "../util/team_api_util";

export const RECEIVE_TEAM = "RECEIVE_TEAM";
export const RECEIVE_USER_TEAMS = "RECEIVE_USER_TEAMS";
export const REMOVE_TEAM = "REMOVE_TEAM";

const receiveTeam = (team) => ({
    type: RECEIVE_TEAM,
    team
})

const receiveTeams = (teams) => ({
    type: RECEIVE_USER_TEAMS,
    teams
})

const removeTeam = (teamId) => ({
    type: REMOVE_TEAM,
    teamId
})

export const createTeam = (team) => dispatch => TeamApiUtil.createTeam(team)
    .then(team => dispatch(receiveTeam(team)))

export const fetchUserTeams = (userId) => dispatch => TeamApiUtil.fetchUserTeams(userId)
    .then(teams => dispatch(receiveTeams(teams)))

export const deleteTeam = (teamId) => dispatch => TeamApiUtil.deleteTeam(teamId)
    .then(() => dispatch(removeTeam(teamId)));

export const printTeam = (team) => (console.log(team))