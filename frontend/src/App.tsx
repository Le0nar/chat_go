import React, { useEffect, useMemo, useState } from 'react';
import { handleOnMessage, sendWbMsg } from './web-socket';

function App() {
    const [messageEvents, seMessageEvents] = useState<MessageEvent<any>[]>([])
    const [message, setMessage] = useState("")

    useEffect(() => {
        handleOnMessage(seMessageEvents)
    }, [])

    return (
        <div className="App">
            
            <ul>
                {messageEvents.map((message, index) => <li key={index}>{message.data}</li>)}
            </ul>

            <div>
                <input type="text" value={message} onChange={(event) => setMessage(event.target.value)}/>
            </div>
            <button onClick={() => sendWbMsg(message)}>
                Send message
            </button>
        </div>
    );
}

export default App;
