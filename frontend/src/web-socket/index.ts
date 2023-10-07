import { Dispatch, SetStateAction } from "react";

const socket = new WebSocket("ws://localhost:8080/ws");
console.log("connecting");

socket.onopen = () => {
    console.log("Successfully Connected");
};

socket.onclose = event => {
    console.log("Socket Closed Connection: ", event);
};

socket.onerror = error => {
    console.log("Socket Error: ", error);
}

export const handleOnMessage = (setMessages: Dispatch<SetStateAction<MessageEvent<any>[]>>) => {
    socket.onmessage = msg => {
        console.log(msg);
        setMessages((prevValue) => [...prevValue, msg]);
    };
};

export const sendWbMsg = (msg: string) => {
    socket.send(msg);
};
