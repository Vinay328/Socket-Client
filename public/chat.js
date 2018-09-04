//Get html elements by unique id
const message = document.getElementById('message');
const sendMessageButton = document.getElementById('send-message');
const writeContent = document.getElementById('write-content');
const submitBtn = document.getElementById('username-submit');
const overlay = document.getElementById('overlay');

let userName = "Anonymous";

//Write the message content to html and emit the data through sockets
function addDataAndEmitMessage(data) {

    //Electron specific code
    if (!data.userName) {
        data.userName = userName;
    }

    writeContent.innerHTML += "<p><strong>" + data.userName + ':</strong>' + data.message + '</p>';

    emitMessage(data);

}

//Capture user name and assign it to user name variable
submitBtn.addEventListener('click', function (event) {

    event.preventDefault();

    if (document.getElementById('user-name').value.trim()) {
        userName = document.getElementById('user-name').value;
        overlay.style.display = "none";
    } else {
        alert("please enter user name");
    }

});

//Send user message
sendMessageButton.addEventListener('click', function (event) {

    event.preventDefault();

    if (message.value.trim()) {

        let data = {
            message: message.value,
            userName: userName
        };

        message.value = "".trim();
        addDataAndEmitMessage(data);

    } else {
        alert("please enter your message");
    }

});


//listen for events
socket.on('chat', (data) => {

    writeContent.innerHTML += "<p><strong>" + data.userName + ':</strong>' + data.message + '</p>';

    //Electron specific code
    if (window.alphaDemo) {
        window.alphaDemo.showNotificationToUser(data, addDataAndEmitMessage);
    }

});