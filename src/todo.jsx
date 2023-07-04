import { useState } from "react";

function newId() {
  return Math.random() * 100;
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleSubmit() {
    setTodos([
      ...todos,
      {
        text: input,
        id: newId(),
        complete: false,
      },
    ]);
    setInput("");
  }

  function handleDelete(id) {
    const newArray = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newArray);
  }

  function completedTodo(id) {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(updatedTodo);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <ul>
          {todos.map(({ text, id, complete }) => {
            return (
              <li
                style={{
                  listStyle: "none",
                  textDecoration: complete ? "line-through" : "none",
                }}
                key={id}
              >
                {text}
                <button onClick={() => handleDelete(id)}>Delete</button>{" "}
                <button onClick={() => completedTodo(id)}>done</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
