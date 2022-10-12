import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function MyForm(props) {
    const handleUpClick = () => {
        // console.log("upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to upper case", "success");
    }
    const handleLoClick = () => {
        // console.log("upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to lower case", "success");
    }
    const handleClearClick = () => {
        // console.log("upper case was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>

                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
                    Convert to upperCase
                </button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
                    Convert to lowerCase
                </button>

                <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-1 my-1"  onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => {
                     return element.length!==0
                }).length} words in your summary and {text.length} characters in your summary</p>
                <p>{0.008 * text.split(" ").filter((element) => {
                    return element.length !== 0
                }).length}Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it here"}</p>
                
            </div>
        </>

    )
}
