import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  
let handleGreen = ()=>{
  props.setMode('green');
}
let handleRed = ()=>{
  props.setMode('red');
}
let handlePurple = ()=>{
  props.setMode('purple');
}
  return (
    <>
      <nav
        className={`navbar bg-${props.mode} navbar-expand-lg bg-body-tertiary`}
        data-bs-theme={`${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
             
            
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {`Enable ${props.mode === "light" ? "Dark" : "Light"} Mode`}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
NavBar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };

NavBar.defaultProps = {
  title: "title here",
  aboutText: "your title here",
};
