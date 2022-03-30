import React from "react";

export default function TodoForm({ todos, setTodos }) {
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: new Date().getUTCMilliseconds(),
        text: e.target.elements.todo.value,
        date: new Date(),
      },
    ]);
  };

  return (
    <form className="todo-form" onSubmit={addTodo}>
      <input id="todo" type="text" placeholder="Enter todo" />
      <button>+</button>
    </form>
  );
}
