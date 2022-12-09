import {TodoAction, TodoActionsType} from "./action";
import {Todo} from "../utils/Todo";
import {todoAppState} from "../utils/todoAppState";

const initialState: Todo[] = [];

export default function todosReducer(state = initialState, action: TodoAction) {
    switch (action.type) {
        case TodoActionsType.ADD_TODO: {
            return [
                ...state,
                {
                    id: crypto.randomUUID(),
                    description: action.payload,
                    completed: false
                },
            ]
        }
        case TodoActionsType.TOGGLED_TODO: {
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            });
        }
        case TodoActionsType.DELETE_TODO: {
            return state.filter(todo => todo.id !== action.payload);
        }
        case TodoActionsType.COMPLETED_CLEARED: {
            return state.filter(todo => !todo.completed);
        }
        default:
            return state;
    }
}