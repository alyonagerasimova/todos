import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./todosSlice";

export const store = createStore(rootReducer);