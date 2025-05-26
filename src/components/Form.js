import { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form className="form">
      <p>Please fill the info to create a new todo</p>
      <div>
        <label>Title: </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </form>
  );
}
