// import { useState } from "react";

function ToDoItem(props) {

  return (
    <div onClick={() => {props.onChecked(props.id)}}>
      <li>
        {props.text}
      </li>
    </div>
  );
}
// props : read only.
export default ToDoItem;
