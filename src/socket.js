import { useState, useEffect } from 'react';

function MyComponent() {
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('wss://example.com');

    socket.onopen = () => {
      console.log('WebSocket connection established.');
      setWs(socket);
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed.');
      setWs(null);
    };

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const sendMessage = (message) => {
    if (ws) {
      ws.send(JSON.stringify({ message }));
    }
  };

  return (
    <div>
      <h1>WebSocket Example</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <button onClick={() => sendMessage('Hello, server!')}>Send Message</button>
    </div>
  );
}
