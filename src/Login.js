import React,{ useState, useEffect }  from 'react'
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword ,updateProfile,signInWithEmailAndPassword} from "firebase/auth";
import { auth, getDatabase } from "./firebase";
function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedOption, setSelectedOption] = useState("mama");
    const [waiting,setwaiting] = useState(false)
    const navigate = useNavigate();
  
    const handleSubmitform = async (e) => {
      e.preventDefault();
      const mymail = email;
      const pass = password;
  
      try {
        setwaiting(true)
        await signInWithEmailAndPassword(auth, mymail, pass);
        setwaiting(false)
        navigate("/mama");
      } catch (e) {
        alert("An error occurred. Kindly fill in the details correctly");
        setwaiting(false)
      }
    };
  
    const handleRadioChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
 
  
    const handleMail = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePass = (e) => {
      setPassword(e.target.value);
    };
  
    useEffect(() => {
      console.log(selectedOption);
    }, [selectedOption]);
  
    return (
      <div className='backG'>
        <div className='form-container'>
          <form onSubmit={handleSubmitform}>
            <h4 className='reg' style={{color :"rgb(255,255,255)"}}>Login here</h4>
        
            <input type='email' onChange={handleMail} placeholder='Email' className='my-form' required/><br/>
            <input type='password' onChange={handlePass} placeholder='Password >= 6-digit' className='my-form' required/><br/>
  
             
            <button type="submit" className='btn log-btn'>Submit</button>
            {waiting && <p>directing to main page...</p>}
          </form>
        </div>
      </div>
    );
}

export default Login
