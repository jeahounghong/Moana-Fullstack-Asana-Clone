import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const fetchUser = (userId) => dispatch => SessionApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))

export const fetchProjectUsers = (projectId) => dispatch => SessionApiUtil.fetchProjectUsers(projectId)
    .then(users => dispatch(receiveUsers(users)))