import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [responseLog, setResponseLog] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:8081');

    socket.on('message', (message) => {
      setChatLog((prevChatLog) => [...prevChatLog, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    const socket = io('http://localhost:8081');
    console.log('Sending message:', message);
    socket.emit('chat', message);
    setChatLog((prevChatLog) => [...prevChatLog, 'You: ' + message]);

    setMessage('');
    socket.disconnect();
  };

  return (
    <div>
      <h1>Socket.io Chat</h1>
      <h2>Chat Log:</h2>
      <ul>
        {chatLog.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <h2>Response Log:</h2>
      <ul>
        {responseLog.map((response, index) => (
          <li key={index}>{response}</li>
        ))}
      </ul>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
