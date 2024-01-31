// import logo from './logo.svg';

import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert" ;
// import About from "./components/About";

// import {
//   BrowserRouter as Router ,
//   Routes,
//   Route,
  

// } from "react-router-dom";






function App() {
  const[mode , setmode] = useState('light');   // whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert =(message, type)  =>{
   setAlert({
    msg : message ,
    type : type 
   }) 
   setTimeout(() => {
    setAlert(null)
   }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
    setmode('dark')
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success")
    document.title = "TextUtils - dark mode"
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - light mode"

    }
  }
  
  return (
    <>
      {/* <Navbar title = "TextUtils Pro" AboutText = "About TextUtils"/> */}
      
      
    {/* <Router> */}
      

      <Navbar title="TextUtils Pro" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
               
          {/* <Routes>
            <Route exact path="/about" element ={<About/>} >
           

            </Route> */}

            {/* <Route exact path="/home" element = { */}
            
            <Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>
            
            
            {/* }  > */}

            
{/* 
            </Route>
          </Routes> */}


      </div>


      {/* </Router> */}

    </>
  );
}

export default App;
