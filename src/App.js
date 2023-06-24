// import logo from './logo.svg';
import './App.css';
import About from './compnents/About';
import NavBar from './compnents/NavBar';
import TextForm from './compnents/TextForm';

// let name='Jatin';
function App() {
  return (
    <>
      <NavBar title='TextUtils' aboutText='About-TextUtils'/>
      {/* <NavBar /> */}
      <div className="container my-3">

      <TextForm title='Enter the Text to Analyze'/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
