import todosReducer from "../redux/todosSlice"
import {TodoActionsType} from "../redux/action";

test('Toggles a todo based on id', () => {
    const initialState = [{ id: "11gf", description: 'Test text', completed: false }];

    const action = { type: TodoActionsType.TOGGLED_TODO, payload: "11gf" };
    const result = todosReducer(initialState, action);
    expect(result[0].completed).toBe(true);
})