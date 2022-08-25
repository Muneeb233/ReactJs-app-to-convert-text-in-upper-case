import React, {useState} from 'react'

export default function TextForm(props) {

const Convertuppercase=()=>{
    let textupcase=text.toUpperCase()
    settext(textupcase)
}

const Convertlowercase =()=>{

    let lwrCase=text.toLowerCase()
    settext(lwrCase)


}

const handleOnChange=(event)=>{

    console.log("Button was Cliked")
    console.log("On change")
    settext(event.target.value)

}
const clrscren=()=>{
    let text=''
    settext(text);

}

const cpyTxt=()=>{

    let text=document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)

}

  const [text, settext ] = useState('Enter text Here 2 ');
  return ( 
    <>
    <div>
        <h1> {props.heading}</h1>   
        <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
    </div>

    <button className="btn btn-primary m-3"  onClick={Convertuppercase}>Convert to uppercase</button>
    <button className="btn btn-primary m-3"  onClick={Convertlowercase}>Convert to Lowercase</button></div>
    <button className="btn btn-primary m-3"  onClick={clrscren}>Clear Screen </button>
    <button className="btn btn-primary m-3"  onClick={cpyTxt}>Copy Text </button>
   <div className="container my=3">
    
   <h2>Your Text Summary</h2>
   <p>{text.split(" ").length } words  Total Characters {text.length}   </p>
   <p>Time to read text  {0.008 * text.trim().length }     </p>


   </div>
    </>

  )
}
