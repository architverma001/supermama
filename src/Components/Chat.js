import React, { useContext, useEffect, useState, useRef } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { AuthContext } from '../context/AuthContext';
import Message from './Message';

function Chat() {
  const { currentUser } = useContext(AuthContext);
  const UID = currentUser.uid;
  const db = getDatabase();
  const dbRef = ref(db, 'chats');
  const [data, setData] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const messages = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        messages.push({ ...childData, id: childKey });
      });
      setData(messages);
    });

    // Cleanup function to unsubscribe from the listener
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [data]);

  console.log(data);

  return (
    <div className='allmessage' ref={chatContainerRef}>
      {data.map((chat) => (
        <div key={chat.id}>
          <Message id={chat.msg_id} name={chat.username} message={chat.messages} />
        </div>
      ))}
    </div>
  );
}

export default Chat;