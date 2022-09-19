import './App.css'
import {BsFillSunFill} from "react-icons/bs"
import {BsMoonFill} from "react-icons/bs"
import React,{useState} from 'react'

function App () {
  let myStyle = {
    color: 'white',
    backgroundColor: 'black'
}
const[mystyle, setstyle] = useState({
  color: 'black',
  backgroundColor: 'white'
})
const[btnText, setBtnText] = useState("Enable Dark Mode")
const toogleStyle = () => {
  if (myStyle.color === "black") {
      setstyle({
          color: "white",
          backgroundColor: "black",
          border: "1px solid white",
      })
      setBtnText("Enable Light Mode")
  }


else {
  setstyle({
      color: 'black',
      backgroundColor: 'white'
  })
  setBtnText("Enable Dark Mode")
}}
  return (
  
  <div>

<button onClick={toogleStyle} type="button" className="btn btn-primary"> {btnText}</button>


  </div>
)}
export default App;
  

