import { Dispatch, SetStateAction } from "react";

const socket = new WebSocket("ws://localhost:8080/ws");

export const connectWebSocket = (
    socket: WebSocket,
    setMessages: Dispatch<SetStateAction<MessageEvent<any>[]>>
    ) => {
    console.log("connecting");

    socket.onopen = () => {
        console.log("Successfully Connected");
    };

    socket.onmessage = msg => {
        console.log(msg);
        setMessages((prevValue) => [...prevValue, msg]);
    };

    socket.onclose = event => {
        console.log("Socket Closed Connection: ", event);
    };

    socket.onerror = error => {
        console.log("Socket Error: ", error);
    };
};

export const sendWbMsg = (socket: WebSocket, msg: string) => {
    socket.send(msg);
};
