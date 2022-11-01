import React from "react";
import {Todo} from "../utils/Todo";
import {TodoItem} from "./TodoItem";

type PropsType = {
    todos: Todo[]
}

export function List(props: PropsType) {
    const {todos} = props;
    return (
        <div className="list">
            {todos.map((item) => {
                return (
                    <TodoItem key={item.id} todo={item}/>
                );
            })}
        </div>
    )
}