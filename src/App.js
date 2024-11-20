import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#16181B";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#16181B";
      showAlert("light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <div className="container">
        <Navbar
          title="Textin"
          about="About Us"
          home="Home"
          mode={mode}
          toggle={toggle}
        />
        <Alert alert={alert} />
        {/* <Routes>
            <Route
              exact
              path="/About.js"
              element={<About mode={mode} />}
            ></Route> */}
        {/* <Route
              exact
              path="/"
              element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Try Textin - Your easy Word counter,Character counter,editor."
          mode={mode}
        />
        {/* }
            ></Route>
          </Routes> */}
      </div>
      {/* // </BrowserRouter> */}
    </>
  );
}

export default App;
