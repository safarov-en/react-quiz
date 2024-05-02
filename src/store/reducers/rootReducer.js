import { combineReducers } from "redux";
import quizReducers from "./quiz";
import createReducer from "./create";
import authReducer from "./auth";

export default combineReducers({
    quiz: quizReducers,
    create: createReducer,
    auth: authReducer
})