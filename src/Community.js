import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import { auth } from './firebase';
import { AuthContext } from './context/AuthContext';
import Chat from './Components/Chat';
import Input from './Components/Input';
function Community() {
  const { currentUser } = useContext(AuthContext);
const id = currentUser.uid
  return (
    <div className='com-img'>
      <Navbar/>
      <Chat/>
      <Input/>
    </div>
  )
}

export default Community
