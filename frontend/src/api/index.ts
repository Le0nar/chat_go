const connect = (socket: WebSocket) => {
    console.log("Attempting Connection...");

    socket.onopen = () => {
        console.log("Successfully Connected");
    };

    socket.onmessage = msg => {
        console.log(msg);
    };

    socket.onclose = event => {
        console.log("Socket Closed Connection: ", event);
    };

    socket.onerror = error => {
        console.log("Socket Error: ", error);
    };
};

const sendMsg = (socket: WebSocket, msg: string) => {
  console.log("sending msg: ", msg);
  socket.send(msg);
};

export { connect, sendMsg };
