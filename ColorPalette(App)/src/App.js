import React, {useState} from 'react'
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode=()=>{
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#191818";
      showAlert("Dark mode has been activated.","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Dark mode has been deactivated.","warning");
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
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter a text to Analyze" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
