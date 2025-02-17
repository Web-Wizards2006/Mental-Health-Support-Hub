function sendMessage() {
    let userMessage = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

    fetch(`http://localhost:8080/api/chatbot?message=${userMessage}`)
        .then(response => response.text())
        .then(data => {
            chatbox.innerHTML += `<p><strong>Bot:</strong> ${data}</p>`;
        });

    document.getElementById("userInput").value = "";
}

function sendChatroomMessage() {
    let message = document.getElementById("chatroom-input").value;
    let chatroomMessages = document.getElementById("chatroom-messages");

    chatroomMessages.innerHTML += `<p><strong>Anonymous:</strong> ${message}</p>`;
    document.getElementById("chatroom-input").value = "";
}

document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let datetime = document.getElementById("datetime").value;

    fetch("http://localhost:8080/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, datetime })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("booking-status").innerText = "Appointment booked successfully!";
    });
});

