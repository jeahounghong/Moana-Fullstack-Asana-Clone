import * as TeamApiUtil  from "../util/team_api_util";
import { closeModal } from "./ui_actions";

export const RECEIVE_TEAM = "RECEIVE_TEAM";
export const RECEIVE_USER_TEAMS = "RECEIVE_USER_TEAMS";
export const REMOVE_TEAM = "REMOVE_TEAM";
export const RECEIVE_USER = "RECEIVE_USER"

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
    .then(team => {dispatch(receiveTeam(team)) ; dispatch(closeModal()) })

export const updateTeam = (team) => dispatch => TeamApiUtil.updateTeam(team)
    .then(team => {dispatch(receiveTeam(team)); dispatch(closeModal())} )

export const fetchUserTeams = (userId) => dispatch => TeamApiUtil.fetchUserTeams(userId)
    .then(teams => dispatch(receiveTeams(teams)))

export const deleteTeam = (teamId) => dispatch => TeamApiUtil.deleteTeam(teamId)
    .then(() => dispatch(removeTeam(teamId)));

export const printTeam = (team) => (console.log(team))

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const addTeamUser = (userData) => dispatch => TeamApiUtil.addTeamUser(userData)
    .then(user => {dispatch(receiveUser(user)); dispatch(closeModal())})