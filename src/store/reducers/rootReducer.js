import { combineReducers } from "redux";
import quizReducers from "./quiz";
import createReducer from "./create";

export default combineReducers({
    quiz: quizReducers,
    create: createReducer
})