import React, {useState} from "react";
import {useCopyToClipboard} from 'usehooks-ts';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [,copy] = useCopyToClipboard();
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        if(newText===""){
            props.showAlert("Please enter some text to convert it to Uppercase","info");
        } else {
            props.showAlert("text converted to uppercase successfully","success");
        }
    }
    
    const handleLowClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        
        if(newText===""){
            props.showAlert("Please enter some text to convert it to Lowercase","info");
        } else {
            props.showAlert("text converted to lowercase successfully","success");
        }
        
    }
    
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value)
    }
    
    const handleClearClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = '';
        setText(newText)
        props.showAlert("text cleared successfully","success");
    }
    
    const handleCopyClick = () =>{
        
        // var text = document.getElementById('myBox');
        // text.select();
        // text.setSelectionRange(0,9999);
        // navigator.clipboard.writeText(text.value);
        copy(text)
        document.getElementById('copyBtn').innerText = "Copied";
        if(text===""){
            props.showAlert("Please enter some text to copy","info");
        } else {
            props.showAlert("text copied successfully","success");
        }
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if(text===""){
            props.showAlert("Please enter some text","info");
        } else {
            props.showAlert("Extra spaces removed!", "success");
        }
    }

    let finalWordCount = text.split(" ").length;
    
    if(text === '' || text[text.length - 1] === ' ')
        finalWordCount--;

    return (
    <>
    <div className="container" style= {{
                backgroundColor: props.mode==='dark'?'#3b3a37':'white',
                color: props.mode==='dark'?'white':'black'
            }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea
            style= {{
                backgroundColor: props.mode==='dark'?'#3b3a37':'white',
                color: props.mode==='dark'?'white':'black'
            }}
            className="form-control" 
            placeholder="Enter you text here"           
            value={text}
            onChange={handleOnChange}
            id="Box"
            rows="8"
            ></textarea>
        </div>

        {/* Convert to uppercase  */}
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>

        {/* Convert to Lowercase  */}
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        
        {/* Clear text  */}
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        
        {/* Copy to Clipboard  */}
        <button className="btn btn-primary mx-1" id="copyBtn" onClick={handleCopyClick}>Copy to clipboard</button>
        
        {/* Remove extra spaces */}
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
        
    <div className="conatiner my-3" style= {{
                backgroundColor: props.mode==='dark'?'#3b3a37':'white',
                color: props.mode==='dark'?'white':'black'
            }}>
        <h1>Your text Summary</h1>
        
        <p>{finalWordCount} words and {text.length} characters</p>

        <p>{0.008 * finalWordCount} Minutes are required to read the above text</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
