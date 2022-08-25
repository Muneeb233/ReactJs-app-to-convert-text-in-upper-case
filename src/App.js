
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';




function App() {
  
  const[mode,setMode]=useState('light'); 

  
  const togglemode=()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.background='#0B0B45'
    document.body.style.color='white'
    }
    else{
      setMode('light')
      document.body.style.background='white'
      document.body.style.color='black'

      } 
  }
  return (

   <>
   
<Navbar title="Muneeb " link="Ali" mode="mode" togglemode={togglemode} / >

<div className="container my-3">

<TextForm/>

</div>
</>
    
  );
}

export default App;
