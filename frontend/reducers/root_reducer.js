import { combineReducers } from "redux"
import sessionsReducer from "./sessions_reducer"
import errorsReducer from "./errors_reducer"

const rootReducer = combineReducers({
    session: sessionsReducer,
    errors: errorsReducer
})

export default rootReducer