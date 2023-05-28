import React, { useContext } from 'react'
import { auth} from '../firebase'
import { AuthContext } from '../context/AuthContext'
function Message(props) {
    const { currentUser } = useContext(AuthContext);
    const cid = currentUser.uid
  return (
   <div className={`message ${cid === props.id ? 'owner' : ''}`}>
      <h5 className='header-msg'>{props.name}</h5>
      <p className='msg'>{props.message}</p>
    </div>
  )
}

export default Message
