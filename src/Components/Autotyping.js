import React,{useEffect,useState} from 'react'
import Typewriter from "typewriter-effect";
function Autotyping({text}) {
  const [count, setCount] = useState(1);
  return (
    <div>
     <Typewriter 
  
  onInit={(typewriter)=> {
  typewriter
  .typeString(text)
  .start();
  }}
  />
    </div>
  )
}

export default Autotyping
