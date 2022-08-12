import {signup, login, logout} from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})


const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const loginUser = (user) => dispatch =>
    // login(user).then(user => dispatch(receiveCurrentUser(user)))
    // .catch((errors) => dispatch(receiveErrors(errors)));
    login(user).then(user => dispatch(receiveCurrentUser(user)),(errors) => dispatch(receiveErrors(errors)))

export const logoutUser = () => dispatch => 
    // logout().then(() => dispatch(logoutCurrentUser()))
    // .catch((errors) => dispatch(receiveErrors(errors)));
    logout().then(() => dispatch(logoutCurrentUser()),(errors) => dispatch(receiveErrors(errors)))

export const signupUser = (user) => dispatch => {
    signup(user).then(user => dispatch(receiveCurrentUser(user)),(errors) => dispatch(receiveErrors(errors)))
}