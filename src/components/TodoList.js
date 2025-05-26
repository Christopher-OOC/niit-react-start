import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <div>
      <h1>Todo List</h1>
      {todos.length === 0 ? (
        <p>No todo, start adding your todo!</p>
      ) : (
        todos.map((todo) => <Todo todo={todo} />)
      )}
    </div>
  );
}
