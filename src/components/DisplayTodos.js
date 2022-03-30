export default function DisplayTodos({todos}) {
    const showTodos = (todos) => {
        if(todos.length !== 0) {
            return todos.map(todo => <li key={todo.id}>{todo.text} - {todo.date.toString()}</li>);
        }
    }
    return (
        <ul className="display-todo">
            {showTodos(todos)}
        </ul>
    )
}