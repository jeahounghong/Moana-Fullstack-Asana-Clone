import sessionErrorsReducer from "./sessions_errors_reducer";
import { combineReducers } from "redux";

export default combineReducers({
    session: sessionErrorsReducer,
})