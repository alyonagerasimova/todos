import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";
import {Todo} from "./utils/Todo";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

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
            <main>
                <section>
                    <div className="todolist">
                        <Header />
                        <TodoList/>
                        <Footer/>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
