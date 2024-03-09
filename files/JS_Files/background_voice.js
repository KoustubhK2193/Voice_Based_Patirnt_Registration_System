const synth = window.speechSynthesis;

const c1_to_text = () => {
    const utterance1 = new SpeechSynthesisUtterance("Enter Your First Name and last name ");
    utterance1.language = 'hi-IN';
    synth.speak(utterance1);
}

const c2_to_text = () => {
    const utterance2 = new SpeechSynthesisUtterance("Enter Your Age and gender ");
    utterance2.language = 'hi-IN';
    synth.speak(utterance2);
    document.getElementById("c2").style.visibility = "visible";
}

const c3_to_text = () => {
    const utterance3 = new SpeechSynthesisUtterance("Enter Your blood group ");
    utterance3.language = 'hi-IN';
    synth.speak(utterance3);
    document.getElementById("c3").style.visibility = "visible";
}

const c4_to_text = () => {
    const utterance4 = new SpeechSynthesisUtterance("Enter Your contact numbers ");
    utterance4.language = 'hi-IN';
    synth.speak(utterance4);
    document.getElementById("c4").style.visibility = "visible";
}

const c5_to_text = () => {
    const utterance5 = new SpeechSynthesisUtterance("Enter Your Address ");
    utterance5.language = 'hi-IN';
    synth.speak(utterance5);
    document.getElementById("c5").style.visibility = "visible";
}

const c6_to_text = () => {
    const utterance6 = new SpeechSynthesisUtterance("Enter Your Cause of Emergency ");
    utterance6.language = 'hi-IN';
    synth.speak(utterance6);
    document.getElementById("c6").style.visibility = "visible";
}

const c7_to_text = () => {
    const utterance7 = new SpeechSynthesisUtterance("Enter medical history if any ? ");
    utterance7.language = 'hi-IN';
    synth.speak(utterance7);
    document.getElementById("c7").style.visibility = "visible";
}

const c8_to_text = () => {
    const utterance7 = new SpeechSynthesisUtterance("Enter registree name ");
    utterance7.language = 'hi-IN';
    synth.speak(utterance7);
    document.getElementById("c8").style.visibility = "visible";
}

const c9_to_text = () => {
    const utterance7 = new SpeechSynthesisUtterance("What is your relation with patient ? ");
    utterance7.language = 'hi-IN';
    synth.speak(utterance7);
    document.getElementById("c9").style.visibility = "visible";
}