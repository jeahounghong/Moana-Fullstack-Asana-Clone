import { RECEIVE_PROJECT, RECEIVE_PROJECTS, REMOVE_PROJECT } from "../actions/project_actions";

const ProjectsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_PROJECTS:
            Object.values(action.projects).forEach((project) => {
                nextState[project.id] = project
            })
            return nextState;
            
        case RECEIVE_PROJECT:
            nextState[action.project.id] = action.project;
            return nextState;

        case REMOVE_PROJECT:
            delete nextState[action.projectId];
            return nextState;

        default:
            return state;
    }
}

export default ProjectsReducer