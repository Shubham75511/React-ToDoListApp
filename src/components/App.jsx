import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

// let nextId = 0;
function App() {
  const [inputText, setInputText] = useState(" ");
  const [items, setItems] = useState([]);
  // Above (items Array)

  function handleChange(event) {
    setInputText(event.target.value);
    // console.log(event.target.value);
  }

  function addItem() {
    setItems([...items, inputText]);
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
