import './App.css';
import NavBar from './Component/NavBar';
import About from './Component/About';
import TextForm from './Component/TextForm';
import React, { useState } from 'react';
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Routes,//earlier Switches and now  exact keyword dropped
  Route
} from "react-router-dom";

function App() {
  let [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  };
  /*const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-dark');
  }*/
  let toggleMode = (/*cls*/) => {
    /*removeBodyClasses();
    document.body.classList.add('bg-'+ cls);*/
    if (mode === 'light') {
      document.body.style.backgroundColor = 'black';
      setMode('dark');
      showAlert("Dark Mode Enabled", "success");
    } 
    else{
      document.body.style.backgroundColor = 'white';
      setMode('light');
      showAlert("Light Mode Enabled", "success");

    }
  };

  
  return (
    <>
    <Router>
    <NavBar
        title='TextUtils'
        aboutText='About'
        mode={mode}
        setMode={setMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className='container my-3'>
      <Routes>
         <Route  path="/" element={<TextForm heading='Try TextUtils- Word, Character counter,Extra Space Remover' mode={mode} showAlert={showAlert} />} />
         <Route  path="/about" element={<About mode={mode}/>} />
      </Routes>
      
      </div>
      </Router>
    </>
  );
  }

export default App;
/*<Router>*/
/* In version 6 of react router-dom Switch replaced by Routes and we use element */
        /* <Route exact> is gone. Instead, routes with descendant routes (defined in other components) use a trailing * in their path to indicate they match deeply Ex-*/

      /*<Routes>*/
      /*<Route  path="/" element= />*/
       /*<Route  path="/about" element={<About/>} />*/
      /*</Routes>*/
/*</Router>*/