import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const initialTodos = [
  {
    title: "Title 1",
    content: "Content 1",
  },
  {
    title: "Title 2",
    content: "Content 2",
  },
  {
    title: "Title 3",
    content: "Content 3",
  },
  {
    title: "Title 4",
    content: "Content 4",
  },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div>
      <Header />
      <TodoList todos={todos} />
      <Form />
    </div>
  );
}
