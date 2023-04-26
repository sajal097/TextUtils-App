import React from "react";


export default function About(props) {
    let buttonColor =  {
      backgroundColor: props.mode === "light" ? "#F8F9FA" : "black",
      color: props.mode === "light" ? "black" : "white"
    }
let bodyColor = {backgroundColor: props.mode === "light" ? "#F8F9FA" : "#212529",
color: props.mode === "light" ? "black" : "white"};


  return (
    <div className="container" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' }  } >
      <h2 style={{color: props.mode === 'light' ? '#ec6e6e' : '#ec6e6e'}} >About Us</h2>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={buttonColor}
            >
            <strong>Analyze your text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  style={bodyColor}>
              TextUtils helps you manipulate your text efficiently and effectively.Be it word count or character count or previewing the text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={buttonColor}
            >
            <strong> Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={bodyColor}>
           All the features are free to use and without any hidden charges for our users.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={buttonColor}
            >
             <strong> Browser Compatiblity</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={bodyColor}>
               Works with Firefox,Safari,Edge,Chrome and all other browsers without any glitch or breaking of pages.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
