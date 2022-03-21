export default function DisplayTodos({todos}) {
    const showTodos = (todos) => {
        if(!todos.length < 1) {
            todos.map(todo => <li key={todo.id}>{todo.text}</li>);
        }
    }
    return (
        <ul className="display-todo">
            {showTodos(todos)}
        </ul>
    )
}