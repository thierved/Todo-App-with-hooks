import React from "react";
import { useState } from "react";

export default function TodoForm({ todos, setTodos }) {
  const [date, setDate] = useState(new Date().toUTCString());
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: new Date().getUTCMilliseconds(),
        text: e.target.elements.todo.value,
        date: date
      },
    ]);
  };

  const changeDate = e => {
      setDate(e.target.value);
  }

  return (
    <form className="todo-form" onSubmit={addTodo}>
      <input id="todo" type="text" placeholder="Enter todo" />
      <input id="date" type="date" value={date} onChange={changeDate}/>
      <button>Add</button>
    </form>
  );
}
