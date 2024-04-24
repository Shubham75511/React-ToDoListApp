import React, { useState } from "react";
import ToDoItem from "./ToDoItem";


function App() {
  const [inputText, setInputText] = useState(" ");
  const [items, setItems] = useState([]);
  // Above (items Array)

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItem() {
    setItems([...items, inputText]);
    setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
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
          {items.map((todoItem, index) => (
            <ToDoItem key={index} id={index} text={todoItem} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
