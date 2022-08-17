import React from 'react';
import {signup, login, logout} from '../util/session_api_util'
import { Redirect } from 'react-router-dom';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

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

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const loginUser = (user) => dispatch =>
    // login(user).then(user => dispatch(receiveCurrentUser(user)))
    // .catch((errors) => dispatch(receiveErrors(errors)));
    login(user).then(user => dispatch(receiveCurrentUser(user)),(errors) => dispatch(receiveErrors(errors)))

export const logoutUser = () => dispatch => 
    logout().then(() => (dispatch(logoutCurrentUser())),
    (errors) => dispatch(receiveErrors(errors)))

export const signupUser = (user) => dispatch => {
    signup(user).then(user => dispatch(receiveCurrentUser(user)),(errors) => dispatch(receiveErrors(errors)))
}