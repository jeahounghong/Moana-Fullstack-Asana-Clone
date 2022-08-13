import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from './store/store'
import {receiveUserTeams} from './util/team_api_util'

document.addEventListener("DOMContentLoaded", ()=>{

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: {id: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore()
    }
    window.store = store;
    window.receiveUserTeams= receiveUserTeams;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root)
})