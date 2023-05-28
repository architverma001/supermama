import React, { useContext, useRef, useState } from 'react';
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import { AuthContext } from '../context/AuthContext';

function Input() {
  const { currentUser } = useContext(AuthContext);
  const myid = currentUser.uid;
  const db = getDatabase();
  const postListRef = ref(db, 'chats');
  const newPostRef = push(postListRef);
  const [msg, setMsg] = useState('');
  const [name, setName] = useState('');
  const inputRef = useRef(null);
  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Fetch username
    const starCountRef = ref(db, 'users/' + myid);

    const usernamePromise = new Promise((resolve, reject) => {
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        resolve(data.username);
      });
    });

    const username = await usernamePromise;

    await set(newPostRef, {
      username: username,
      messages: msg,
      msg_id:myid
    });
    inputRef.current.value = '';
  };

  return (
    <div className='input-main'>
      <div>
        <input type='text' className='inputs' onChange={handleChange}  ref={inputRef} />
      </div>
      <button className='btns' onClick={handleClick}>Send</button>
    </div>
  );
}

export default Input;
