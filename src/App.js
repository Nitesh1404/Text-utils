import './App.css';
import Alerts from './Components/Alerts.js';
import About from './Components/About.js';
import Navbar from "./Components/Navbar.js";
import TextForm from "./Components/TextForm.js"
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  // const removeBg = () => {
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  // }

  const toggleMode = (cls) => {
    // removeBg();
    // document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(41 45 48)';
      showAlert(":Enable to dark mode ", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(":Enable to light mode ", "success");
    }
  }


  return (

    <>
      <Router>
        <Navbar title="TextUtils" aboutTitle="about us" Mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <div className="container my-4">
          <Switch>
            <Route exact path="/about">
              <About Mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm heading="Analyse your text in better way!! " Mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
