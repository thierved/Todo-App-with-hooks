import { useRef, useState } from 'react';
import './App.css';

const Input = ({ todo, setTodo }) => {
    const userInput = useRef();

    const addTodo = e => {
        e.preventDefault();
        const newTodo = userInput.current.value.trim();
        if(newTodo !== '') setTodo([...todo, newTodo]);
        userInput.current.value = '';
    };
    return (
        <form id='input' onSubmit={addTodo}>
            <input type='text'
                ref={userInput}
                id='todoInput'
                placeholder='Enter the task' 
            />
            <button >Add</button>
        </form>
    )
};

export default function App() {
    const [todo, setTodo] = useState([]);
    return (
        <div className='container'>
            <h1 id='title'>Todo List!</h1>
            <Input todo={todo} setTodo={setTodo} />
            <ul>{todo.map(t => <li key={todo.indexOf(t)}>{t}</li>)}</ul>
        </div>
    );
}