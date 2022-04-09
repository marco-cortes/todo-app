import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    todo: todoReducer,
    auth: authReducer
})