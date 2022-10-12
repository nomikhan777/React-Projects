import "./App.css";
import Navbar from "./MyComponents/Navbar";
import MyForm from "./MyComponents/MyForm";
import About from "./MyComponents/About";
import React, { useState } from "react";
import Alert from "./MyComponents/Alert";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,


    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" AboutText="About TextUtils"/>  */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} AboutText="About" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode ={mode} />} />


            <Route path="/" element={<MyForm showAlert={showAlert} heading=" Enter the text to analyze below" mode={mode} />} />



          </Routes>



        </div>
      </Router>
    </>
  );
}

export default App;
