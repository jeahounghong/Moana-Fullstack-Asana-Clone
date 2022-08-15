import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';
import { fetchUserProjects } from "./actions/project_actions";


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
    window.fetchUserProjects = fetchUserProjects;

    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root)
})