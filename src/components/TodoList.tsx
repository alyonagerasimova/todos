import React from "react";
import {Todo} from "../utils/Todo";
import {TodoItem} from "./TodoItem";
import {useSelector} from "react-redux";

const selectTodos = (state: { todos: Todo[] }) => state.todos;

export function TodoList() {

    const todos = useSelector(selectTodos);

    const selectCompletedTodos = (state: { todos: Todo[] }) => {
        const completedTodo = state.todos.filter(todo => todo.completed);
        return completedTodo.length;
    }
    return (
        <div className="todo-list">
            {todos.map((item) => {
                return (
                    <TodoItem key={item.id} todo={item}/>
                );
            })}
        </div>
    )
}