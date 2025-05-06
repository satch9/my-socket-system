const socket = io('https://automatic-doodle-q7xxw7vjx562xqr9-3001.app.github.dev'); // Replace with your server URL

socket.on('connect', () => {
    console.log('Connected to the server');
});

socket.on('message', (data) => {
    console.log('Message received:', data);
});

function sendMessage(message) {
    socket.emit('message', message);
}

document.getElementById('sendButton').addEventListener('click', () => {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    sendMessage(message);
    messageInput.value = '';
});