import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";
import {Todo} from "./utils/Todo";

function App() {
    const todo: Todo[] = [
        {
            id: "fdsf1",
            description: "111",
            completed: false
        }, {
            id: "2das",
            description: "222",
            completed: false
        }
    ];

    return (
        <div className="App">
            <header className="App-header">
                <h1>todos</h1>
            </header>
            <TodoList/>
        </div>
    );
}

export default App;
