import React, { useState } from "react";
// import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import "./App.css";
// import About from "./components/About";
import TextForm from "./components/TextForm";
// import Home1 from "./components/Home1";
import Navbar from "./components/Navbar";
// import Page404p from "./components/Page404p";
// import User from "./components/User";
// import { Alert } from "./components/Alert";




function App() {
  const [mode, setMode] = useState("light");
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  // };

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042443";
      // showAlert("Dark Mode has been enabled", "Success");
      // document.title = "textutils - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("light Mode has been enabled", "Success");
      // document.title = "textutils - light mode";
    }
  };

  return (
    <>
      {/* <Navbar title="new siter" mode={mode} toggleMode={toogleMode} />
      <Alert alert={alert} />
      <div className="container mt-5">
        
        <About/>
      </div>
      <TextForm/> */}
      {/* <Router>
        <Navbar title="new siter" mode={mode} toggleMode={toogleMode} />
        <Alert alert={alert} />
          <Switch>
            <Route path="/">
              <TextForm mode={mode} heading="Enter the text to analyze" />
            </Route>
            <Route path="/about">
              <About/>
            </Route>
          </Switch>

      </Router> */}

      <div className="App">
        {/* <BrowserRouter> */}
        <Navbar title="new siter" mode={mode} toggleMode={toogleMode} />
        {/* <Routes> */}
        {/* <Route path="/"  element={<Home1 />}/> */}
        {/* <Route path="/about"  element={<About />}/> */}
        {/* <Route path="/textform"  element={<TextForm />}/>
        <Route path="user/:name"  element={<User/>}/>
        <Route path="/*"  element={<Page404p/>}/> */}
        <TextForm mode={mode} heading="Enter the text to analyze" />
        {/* </Routes>
        </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
