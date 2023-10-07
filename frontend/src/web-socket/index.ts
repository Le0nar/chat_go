import { Dispatch, SetStateAction } from "react";

// TODO: use domain or IPv4 Address with port for use with several devices
// const socket = new WebSocket("ws://192.168.0.106:8080/ws");
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
