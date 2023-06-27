// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './compnents/About';
import NavBar from './compnents/NavBar';
import TextForm from './compnents/TextForm';
import Alert from './compnents/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// let name='Jatin';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#35333f';
      document.body.style.color = 'white';
      showAlert('Dark Mode Enabled', 'success');
      document.title = 'TextUtils | Dark Mode'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode Enabled', 'success');
      document.title = 'TextUtils | Light Mode'


    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <BrowserRouter>
      <div >
        <NavBar title='TextUtils' mode={mode} toggleMode={toggleMode} aboutText='About-TextUtils' />
        {/* <NavBar /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} title='Enter the Text to Analyze' />} />
            <Route path="/about" element={<About />} />
          </Routes>

          {/* <About/> */}
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
