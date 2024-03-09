// Initialize SpeechSynthesis API
const synth = window.speechSynthesis;

// Get DOM elements
const textInput = "";
const speakButton = document.getElementById('speak-button');

// Function to speak the text
const speakText = () => {
  // Create SpeechSynthesisUtterance object
  const utterance = new SpeechSynthesisUtterance("Hey Tell Your Name ");

  // Delay before speaking the text (in milliseconds)
  const delay = 3000; // 3 seconds

  // Delay execution of speech
  setTimeout(() => {
    // Speak the text
    synth.speak(utterance);
  }, delay);
};

// Attach event listener to the button
speakButton.addEventListener('click', speakText);
