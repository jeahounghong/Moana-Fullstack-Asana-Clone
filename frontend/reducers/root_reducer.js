import { combineReducers } from "redux"
import sessionsReducer from "./sessions_reducer"
import errorsReducer from "./errors_reducer"
import entitiesReducers from "./entities_reducers"

const rootReducer = combineReducers({
    entities: entitiesReducers,
    session: sessionsReducer,
    errors: errorsReducer
})

export default rootReducer