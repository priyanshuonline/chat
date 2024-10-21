const sendBtn = document.querySelector('.send_button').addEventListener('click', function() {
    // Get the value from the input field
    const message = document.querySelector('.send1').value;

    
    // Check if the message is not empty
    if (message.trim() !== "" ) {
        // Create a new div for the message
        const newMessage = document.createElement('div');
        newMessage.classList.add('sendmsg', 'd-flex', 'justify-content-end');

        // Create the inner structure for the message
        newMessage.innerHTML = `
            <div class="sendmsg2">
                <div class="sendmsg1">
                    <p>${message}</p>
                </div>
                <span class="timespan d-flex justify-content-end">${new Date().toLocaleTimeString()}</span>
            </div>
        `;

        // Append the new message to the chatbox
        document.querySelector('.chatbox1').appendChild(newMessage);

        // Scroll to the bottom of the chatbox
        document.querySelector('.chatbox').scrollTop = document.querySelector('.chatbox').scrollHeight;

        // Clear the input field after sending the message
        document.querySelector('.send1').value = "";
    }
});

// Add event listener to the input field
document.querySelector('.send1').addEventListener('keydown', function(e) {
    // Check if the key pressed is "Enter"
    if (e.key === 'Enter') {
        // Get the value from the input field
        const message = document.querySelector('.send1').value;

        // Ensure the message is not empty
        if (message.trim() !== "") {
            // Create a new div for the message
            const newMessage = document.createElement('div');
            newMessage.classList.add('sendmsg', 'd-flex', 'justify-content-end');

            // Structure the message block with timestamp
            newMessage.innerHTML = `
                <div class="sendmsg2">
                    <div class="sendmsg1">
                        <p>${message}</p>
                    </div>
                    <span class="timespan d-flex justify-content-end">${new Date().toLocaleTimeString()}</span>
                </div>
            `;

            // Append the new message to the chatbox
            document.querySelector('.chatbox1').appendChild(newMessage);

            // Scroll to the bottom of the chatbox
            document.querySelector('.chatbox').scrollTop = document.querySelector('.chatbox').scrollHeight;

            // Clear the input field after sending the message
            document.querySelector('.send1').value = "";
        }
    }
});

