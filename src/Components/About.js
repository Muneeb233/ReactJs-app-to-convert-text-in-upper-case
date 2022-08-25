import React, { useState } from 'react'

export default function About() {
  const [myStyle,setMyStyle]=useState({
      color:'white',
      backgroundColor:'Black'
    })
  
  const [btntext,setBtnText]= useState("Enable Light mode")
    
    
  
    const togglemystyle=()=>{
      if (myStyle.color=='white') {
        setMyStyle({
          color:'black',
          backgroundColor:'white'
  
        })

       setBtnText("Enable Light mode")
        
      }
    
      else{
        setMyStyle({
          color:'white',
          backgroundColor:'black'  
      })
      setBtnText("Enable Light Mode")
       
    } 
  }
   
  
  return (
    
   
    <div className='container my-3' style={myStyle}  >
       <h1>About us</h1>
      <div className="panel-group" id="accordion" style={myStyle} >
    <div className="panel panel-default">
    <div className="panel-heading">
    <h4 className="panel-title">
    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
      Product description
    </a>
    </h4>
    </div>
    <div id="collapseOne" className="panel-collapse collapse in">
    <div className="panel-body">
    TEST STUFF
    </div>
    </div>
    </div>
    <div className="panel panel-default">
    <div className="panel-heading">
    <h4 className="panel-title">
    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
      Reviews
    </a>
    </h4>
    </div>
    <div id="collapseTwo" className="panel-collapse collapse">
    <div className="panel-body">
   Your Review Code Here
    </div>
    </div>
    </div>
    </div>

    <button type="button" className="btn btn-primary my-3" onClick={togglemystyle}>Enable Dark Mode</button>
    </div>
   
  )
 
}