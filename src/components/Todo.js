export default function Todo({ todo }) {
  return (
    <div className="todo">
      <div className="todo__header">
        <span className="todo__toggle">+</span>
        <p className="todo__title">{todo.title}</p>
      </div>
      <div className="todo__content">{todo.content}</div>
    </div>
  );
}
