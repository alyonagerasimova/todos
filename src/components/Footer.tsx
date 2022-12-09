import React from 'react';
import {useSelector} from "react-redux";
import {Todo} from "../utils/Todo";
import {RootState} from "../redux/rootReducer";
import {RemainingTodos} from "./RemainingTodos";
import {StatusFilter} from "./StatusFilter";

export function Footer(){

    const todoRemaining = useSelector((state: RootState) => {
        const uncompletedTodos = state.todos.filter(todo => !todo.completed);
        return uncompletedTodos.length;
    });

    const status = useSelector((state: RootState) => state.filters)

    let onStatusChange;

    return (
        <div className="footer">

            <div className="actions">
                <h5>Actions</h5>
                <button className="button">Mark all completed</button>
                <button className="button">Clear completed</button>
            </div>

            <RemainingTodos count={todoRemaining}/>
            <StatusFilter value={status} onChange={onStatusChange}/>
        </div>
    )
}