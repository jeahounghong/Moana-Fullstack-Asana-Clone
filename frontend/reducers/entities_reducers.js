import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import TeamReducer from './teams_reducer';
import ProjectsReducer from "./projects_reducer";
import SectionsReducer from "./sections_reducer";
import TaskReducer from "./tasks_reducer";

export default combineReducers({
    users: usersReducer,
    teams: TeamReducer,
    projects: ProjectsReducer,
    sections: SectionsReducer,
    tasks: TaskReducer
})