import { useReducer } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';

function Todo({ todo }) {
    return (
        <li className="todo">
            <input type='checkbox' />
            <p>{todo.text}</p>
            <span>edit</span>
        </li>
    );
}

function DisplayTodos({ todos }) {
    return (
        <ul>
            {todos.map(todo => <Todo todo={todo} key={todo.id}/>)}
        </ul>
    )
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
        if (todo !== "") {
            dispatch({ type: "ADD_TODO", payload: { id: state.length, text: todo } });
        }
        setTodo("");
    }

    return (
        <div className='container'>
            <h1 id='title'>Todo List!</h1>
            <DisplayTodos todos={state} />
            <form onSubmit={submit}>
                <input
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                    type='text'
                    placeholder='Add todo'
                />
                <button>Add</button>

            </form>
        </div>
    );
}