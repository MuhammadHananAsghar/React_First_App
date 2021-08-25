import React, {useState} from 'react'
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode=()=>{
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#191818";
      showAlert("Dark mode has been activated.","success");
      document.title = 'Dark Mode Enabled';
      setTimeout(() => {
        document.title = 'TextUtils - Home';
      }, 1000);
    }else{
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Dark mode has been deactivated.","warning");
      document.title = 'Light Mode Enabled';
      setTimeout(() => {
        document.title = 'TextUtils - Home';
      }, 1000);
    }
  }

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
          <div className="container">
            <Switch>
              <Route exact path="/about">
                <About mode={mode}/>
              </Route>
              <Route exact path="/">
                <TextForm showAlert={showAlert} heading="Enter a text to Analyze" mode={mode}/>
              </Route>
              <Redirect to="/" />
            </Switch>
          </div>
      </Router>
    </>
  );
}

export default App;
