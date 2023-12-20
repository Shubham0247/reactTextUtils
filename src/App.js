import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import TextForm from "./components/TextForm";
function App() {
  const [mode,setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=> {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setDarkMode('dark')
      document.body.style.backgroundColor = "#3b3a37"
      // document.body.style.color = "white"
      showAlert("Dark mode has been enabled succesfully","success");
    }
    else{
      setDarkMode('light')
      document.body.style.backgroundColor = "white"
      // document.body.style.color = "black"
      showAlert("Dark mode has been disabled succesfully","success");
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
