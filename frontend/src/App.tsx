import React, { useEffect, useMemo, useState } from 'react';
import { connectWebSocket, sendWbMsg } from './web-socket';

function App() {
    const [messages, setMessages] = useState<MessageEvent<any>[]>([])
    const webSocket = useMemo(() => new WebSocket("ws://localhost:8080/ws"), [])

    useEffect(() => {
        connectWebSocket(webSocket, setMessages)
    }, [])

    return (
        <div className="App">
            <button onClick={() => sendWbMsg(webSocket, "hello3")}>Hit</button>
            <ul>
                {messages.map((message, index) => <li key={index}>{message.data}</li>)}
            </ul>
        </div>
    );
}

export default App;
