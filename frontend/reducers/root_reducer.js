import { combineReducers } from "redux"
import sessionsReducer from "./sessions_reducer"
import errorsReducer from "./errors_reducer"
import entitiesReducers from "./entities_reducers"
import uiReducer from "./ui_reducer"

const rootReducer = combineReducers({
    entities: entitiesReducers,
    ui: uiReducer,
    session: sessionsReducer,
    errors: errorsReducer
})

export default rootReducer