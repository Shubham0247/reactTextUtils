import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
} from "react-router-dom";

// import TextForm from "./components/TextForm";
function App() {
  const [mode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#3b3a37";
      // document.body.style.color = "white"
      document.querySelector("title").textContent = "TextUtils-Dark Mode";
      showAlert("Dark mode has been enabled succesfully", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black"
      document.querySelector("title").textContent = "TextUtils-Light Mode";
      showAlert("Dark mode has been disabled succesfully", "success");
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          
          < Route path="/"
            element= {<TextForm showAlert={showAlert} heading="Enter the text to analyse: " mode={mode}/>} /> 
          </Routes>

          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below"
              mode={mode}
            />
          </Route> */}
      </div>
    </>
  );
}

export default App;
