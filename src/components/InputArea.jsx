import { useState } from "react";

function InputArea(props) {
    const [inputText, setInputText] = useState(" ");

    function handleChange(event) {
        setInputText(event.target.value);
    }

    return (
        <div className="form">
            <input type="text" onChange={handleChange} value={inputText} />
            <button onClick={() => {
                props.onAdd(inputText);
                setInputText("");
            }} >
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;
