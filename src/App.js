import React ,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter , Route, Routes} from 'react-router-dom'

function App() 
{
  const[mode, setMode] = useState('dark');
  const [alert, setalert] = useState(null);
  
  const showAlert = (message,type)=>{
        setalert({
          msg: message,
          type: type
        })
        setTimeout(()=> {
          setalert(null);
        },1500);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Darl mode has been enabled","success");
      document.title = 'TextUtils -Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils -Light Mode'
    }
  } 
  return (
    <>
    {/* <Main>    */}
    
    {/* <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/> */}
    <BrowserRouter>
    <Navbar title="TEXTYFY" aboutText="About Us" mode = {mode} toggleMode = {toggleMode}/>
    <div className="container" >
      
    <Alert alert= {alert}/>
     <Routes>
     <Route exact path="/about" element={<About mode = {mode}/>} />    
    <Route exact path="/" element={ <TextForm showAlert= {showAlert} heading = "Enter the text to analyze" mode = {mode}/>}/>
   
     </Routes>
     </div>
   </BrowserRouter>
   
   {/* </Main>   */}
    </>
  );
}

export default App;
