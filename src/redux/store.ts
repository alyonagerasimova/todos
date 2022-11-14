import {applyMiddleware, createStore} from "redux";
import rootReducer from "./todosSlice";
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(
    applyMiddleware()
);

const store = createStore(rootReducer, composedEnhancer);
export default store;