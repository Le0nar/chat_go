import React, { useEffect } from 'react';
import { connect, sendMsg } from './api';

function App() {
    const socket = new WebSocket("ws://localhost:8080/ws");

    useEffect(() => {
        connect(socket)
    }, [])

    return (
        <div className="App">
            <button onClick={() => sendMsg(socket, "hello3")}>Hit</button>
        </div>
    );
}

export default App;
