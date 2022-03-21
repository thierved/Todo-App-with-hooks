import React from "react";

export default function TodoForm({todos, setTodos}) {
    const addTodo = e => {
        e.preventDefault();
    };

    return (
        <div className="todo-form" onSubmit={addTodo}>
            <form>
                <input id="todo" type="text" placeholder="Enter todo" />
                <button>Add</button>
            </form>
        </div>
    );
}