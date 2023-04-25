import React from "react";
import PropTypes from "prop-types";
function Alert(props) {
    const capitalize = (word)=>{
let lower = word.toLowerCase();
return (lower.charAt(0).toUpperCase() + lower.slice(1));
    };
  return (
   <div style={{height:"50px"}}>
    {props.alert && <div
        className={`alert alert-${props.alert.typ} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.typ)}</strong>: {props.alert.msg}!
      </div>}
      </div>
  );

 
}

export default Alert;
