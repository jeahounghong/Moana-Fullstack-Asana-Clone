import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';
import { fetchProjectSections, RECEIVE_SECTION } from './actions/section_actions'
import {fetchUserProjects} from './actions/project_actions'


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
    window.fetchProjectSections = fetchProjectSections;
    window.RECEIVE_SECTION = RECEIVE_SECTION;
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root)
})

