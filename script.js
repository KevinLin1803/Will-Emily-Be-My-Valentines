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
    "Muah",
    "You're Sexy",
    "Mhm my girlie",
    "Small face big eyes",
    "Fat ASS",
    "Kind heart",
    "GRADE A PUSSY",
    "Fun girlie",
    "Loving girlie",
    "The best girlie",
    "BESTEST GIRLIEEE",
    "BEST GIRLIE WHOLE WIDE WROLDDDDDDDDD",
    "Girlie of my dreams"
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

// document.addEventListener("DOMContentLoaded", function() {
//     // Create confetti particles
//     const confettiContainer = document.querySelector('.confetti-container');
//     const numConfetti = 100; // Adjust the number of confetti particles
//     for (let i = 0; i < numConfetti; i++) {
//         createConfetti(confettiContainer);
//     }
// });

// function createConfetti(container) {
//     const confetti = document.createElement('div');
//     confetti.classList.add('confetti');
//     container.appendChild(confetti);
// }