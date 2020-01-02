import { combineReducers } from "redux";
import visitsReducer from '../features/visitsReducer'

export const rootReducer = combineReducers({
    visits: visitsReducer
}
)