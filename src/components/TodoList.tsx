import React from "react";
import {Todo} from "../utils/Todo";
import {TodoItem} from "./TodoItem";
import {useSelector} from "react-redux";
import {RootState} from "../redux/rootReducer";

const selectTodosIds = (state: RootState) => state.todos.map(todo => todo.id);

export function TodoList() {

    const todos = useSelector(selectTodosIds);

    const selectCompletedTodos = (state: { todos: Todo[] }) => {
        const completedTodo = state.todos.filter(todo => todo.completed);
        return completedTodo.length;
    }

    // const renderListItems = todoIds.map(todoId => {
    //     return <TodoItem key={todoId} id={todoId} />
    // })
    return (
        <div className="todo-list">
            {/*{renderListItems}*/}
        </div>
    )
}