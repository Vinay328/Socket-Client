let socket = io('https://server-socket.herokuapp.com/');

socket.on('connect', function () {
    alert("connection successfull");
});

socket.on('connect_error', (error) => {
    alert("cannot establish connection to the socket");
});

function emitMessage(data) {

    socket.emit('chat', {
        message: data.message,
        userName: data.userName
    });

}