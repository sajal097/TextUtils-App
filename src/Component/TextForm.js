import React, { useState } from "react";
import PropTypes from "prop-types";


export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };
  const handleOnChange = (event) => {
    
    setText(event.target.value);
  };
  const handleLwCase = () => {
    setText(text.toLocaleLowerCase());
    props.showAlert("Converted to lowercase", "success");

  };
  const handleClearText = () => {
    setText("");
    props.showAlert("Text cleared", "success");

  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");

  };
  const handleRmvSpace = ()=>{
    const regEx = /\s+/g;
    const wSpace = " ";
    setText(text.replaceAll(regEx,wSpace));
    props.showAlert("Extra spaces removed","success")
  }
  //const [buttonText, setButtonText] = useState('Find Text');
  /*let handleSearch = (event)=> {
    let findTab = document.querySelector("#searchTab");
    let compareText = event.target.value;
    console.log(compareText);
     }*/

  /*const handleTab = ()=>{

    let findTab = document.createElement("textarea");
    findTab.setAttribute("id", "myBox myBox-tab")
    findTab.setAttribute("className", "form-control");
     let insertTab = document.getElementById("btn-search");

    if(buttonText === 'Find Text'){
     insertTab.before(findTab);
     let buttonFind = document.querySelector("#btn-search");
     setButtonText('Search For It');
    }

    findTab.setAttribute("onChange",{handleSearch});

  }*/
  const [text, setText] = useState("Enter your text here");
  const textLength = (txt)=>{

        if ((/^[^\s+]/.test(txt))|| /[\w]+/g.test(txt)) {
          return txt.match(/[\w]+/g).length;
        }
        else{
          return 0;
        }
  }
  
  return (
    <>
      <div className="container cnt-1">
        <h3 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h3>
        <div className="mb-2">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control mt-1"
            id="myBox"
            rows="3"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "#F8F9FA" : "#0e1c2b",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLwCase}>
          Convert to Lower Case
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          CopyText
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRmvSpace}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your text Summary</h3>
        <p>
          {text === "" ? 0:textLength(text)} words, {text.length} characters
        </p>
        <p>{text === "" ? 0:0.008 * textLength(text)} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
