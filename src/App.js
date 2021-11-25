import { useReducer } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';

function DisplayTodos({ todos }) {
    return (
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.id} - {todo.text}</li>)}
        </ul>
    );
}

export default function App() {
    const [todo, setTodo] = useState('');
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "ADD_TODO":
                    return [...state, action.payload];
                default:
                    return state;
            }
        }, []);

    const submit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", payload: { id: state.length, text: todo } });
    }

    return (
        <div className='container'>
            <h1 id='title'>Todo List!</h1>
            <form onSubmit={submit}>
                <input
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                    type='text'
                    placeholder='add todo' />
            </form>
            <DisplayTodos todos={state} />
        </div>
    );
}