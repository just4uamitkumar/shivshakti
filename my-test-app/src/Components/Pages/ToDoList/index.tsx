import { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteToDo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div className="todo-app">
      <h1>{"To Do List"}</h1>
      <div className="input-container">
        <input
          data-testId="todo-input"
          placeholder="Enter a new todo"
          value={input}
          role="textbox"
          onChange={(e) => setInput(e.target.value)}
        />
         <button data-testId="add-button" onClick={addTodo}>Add Todo </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item" data-testId={`todo-item-${index}`}>
            {todo}
            <button
              data-testId={`remove-button-${index}`}
              className="remove-button"
              onClick={() => deleteToDo(index)} >{'Delete'}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
