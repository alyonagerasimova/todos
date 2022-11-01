import {TodoAction, TodoActionsType} from "./action";
import {todoAppState} from "../utils/todoAppState";

const initialState = {
    status: todoAppState.filters.status
}

export default function filtersReducer(state = initialState, action: TodoAction) {
    switch (action.type) {
        case TodoActionsType.STATUS_CHANGED:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}