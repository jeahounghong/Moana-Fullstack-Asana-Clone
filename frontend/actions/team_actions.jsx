import * as TeamApiUtil  from "../util/team_api_util";

export const RECEIVE_TEAM = "RECEIVE_TEAM";
export const RECEIVE_USER_TEAMS = "RECEIVE_USER_TEAMS;"

const receiveTeam = (team) => ({
    type: RECEIVE_TEAM,
    team
})

const receiveUserTeams = (teams) => ({
    type: RECEIVE_USER_TEAMS,
    teams
})

export const createTeam = (team) => dispatch => TeamApiUtil.createTeam(team)
    .then(team => dispatch(receiveTeam(team)))

export const fetchUserTeams = (userId) => dispatch => TeamApiUtil.fetchUserTeams(userId)
    .then(teams => dispatch(receiveUserTeams(teams)))

export const printTeam = (team) => (console.log(team))