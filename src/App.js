import React from 'react';
import "./App.css"
import DisplayTodos from './components/DisplayTodos';
import TodoForm from './components/TodoForm';

export default function App() {
    const [todos, setTodos] = React.useState([]);
    return (
        <div className="container">
            <h1>Todo List!</h1>
            <TodoForm todos={todos} setTodos={setTodos}/>
            <DisplayTodos todos={todos}/>
        </div>
    );
}