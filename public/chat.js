// query dom

const message = document.getElementById('message');
const sendMessageButton = document.getElementById('send-message');
const writeContent = document.getElementById('write-content');
const submitBtn = document.getElementById('username-submit');
const overlay = document.getElementById('overlay');

let userName;

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
        writeContent.innerHTML += "<p><strong>" + data.userName + ':</strong>' + data.message + '</p>';
        emitMessage(data);

    } else {
        alert("please enter your message");
    }

});


//listen for events
socket.on('chat', function (data) {
    writeContent.innerHTML += "<p><strong>" + data.userName + ':</strong>' + data.message + '</p>';
});