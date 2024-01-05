document.addEventListener('DOMContentLoaded', function () {
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', function (e) {
        const x = e.clientX;
        const y = e.clientY;

        customCursor.style.left = `${x}px`;
        customCursor.style.top = `${y}px`;
    });
});

// Array of messages
var messages = [
    "Message 1",
    "Message 2",
    "Message 3",
    "Message 4",
    "Message 5",
    "Message 6",
    "Message 7",
    "Message 8",
    "Message 9",
    "Message 10",
    "Message 11",
    "Message 12",
    "Message 13"
];

// Variable to keep track of the current message index
var currentMessageIndex = 0;

// Function to toggle the visibility of the popup text and display the next message
function togglePopup() {
    var popupContainer = document.getElementById("popup-container");
    var popupText = document.createElement("div");  
    //Would be good to turn all of these into hearts Then fix up the animation a bit. Start in the centre of the page
    popupText.className = "message";

    popupText.style.animationDelay = currentMessageIndex * 0.01 + "s";

    popupText.innerHTML = messages[currentMessageIndex];

    popupContainer.appendChild(popupText);
    currentMessageIndex++;

    //I dunno why this works lmao
    if (currentMessageIndex > messages.length) {
        currentMessageIndex = 0;
        popupContainer.innerHTML = "";
    }

}
