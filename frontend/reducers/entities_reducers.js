import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import TeamReducer from './teams_reducer';
import ProjectsReducer from "./projects_reducer";

export default combineReducers({
    users: usersReducer,
    teams: TeamReducer,
    projects: ProjectsReducer
})