import "./App.css";
import Navbar from "./MyComponents/Navbar";
import MyForm from "./MyComponents/MyForm";
// import About from "./MyComponents/About";
import React, { useState } from "react";

function App() {
  
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" AboutText="About TextUtils"/>  */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <MyForm heading=" Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
