import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { getDatabase, ref, set } from "firebase/database";
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [waiting,setwaiting] = useState(false)
  const navigate = useNavigate();
  const db = getDatabase()

const handleLogin = ()=>{
  navigate('/login')
}



  const handleSubmitform = async (e) => {
    e.preventDefault();
    const mymail = email;
    const pass = password;
    const myname = name;
  
    try {
      setwaiting(true)
      await createUserWithEmailAndPassword(auth, mymail, pass);
      const userId = auth.currentUser.uid
      await set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
       
      });
     
      setwaiting(false)

       navigate("/mama");
    } catch (e) {
      alert("An error occurred. Kindly fill in the details correctly");
      setwaiting(false)
    }
  };



  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleMail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };



  return (
    <div className='backG'>
      <div className='form-container'>
      
        <form onSubmit={handleSubmitform}>
          <h4 className='reg'style={{color :"rgb(255,255,255)"}}>Register here</h4>
          <input type='text' onChange={handleName} placeholder='name' className='my-form' required/><br/>
          <input type='email' onChange={handleMail} placeholder='Email' className='my-form' required/><br/>
          <input type='password' onChange={handlePass} placeholder='Password >= 6-digit' className='my-form' required/><br/>

         

          <button type="submit" className='btn signup'>Signup</button>
          {waiting && <p>directing to main page...</p>}
        <div> <span onClick={handleLogin} className='logintxt'>Already have an account.</span>
  <span style={{ color: '#0000FF', textDecoration: 'underline'}} className='logintxt' onClick={handleLogin}>Login here</span>
  </div> 
        </form>
      </div>
    </div>
  );
}

export default Registration;