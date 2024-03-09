//    HTML5 Speech Recognition API 
function startDictation(cons,name) {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        var recognition = new webkitSpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.lang = 'en-US';
        recognition.start();
        document.getElementById(name).classList.add("allmic");


        var constant = cons;
        recognition.onresult = function (e) {
            document.getElementById(constant).value = e.results[0][0].transcript;
        };

        recognition.onerror = function (e) {
            recognition.stop();
        };
        recognition.onaudioend = () => {
            document.getElementById(name).classList.remove("allmic");

        };
        // while (!recognition.onaudioend) {
            
        // }
          
    }
}


function solution11() {
    var cons = "fname";
    name="mic1"
    startDictation(cons,name)
}
function solution12() {
    var cons = "lname";
    name="mic2"
    startDictation(cons,name)
}
function solution21() {
    var cons = "contactname";
    name="mic1"
    startDictation(cons,name)
}
function solution22() {
    var cons = "age";
    name="mic3"
    startDictation(cons,name)
}

function solution31() {
    var cons = "gender";
    name="mic4"
    startDictation(cons,name)
}
function solution32() {
    var cons = "contactphone";
    name="mic1"
    startDictation(cons,name)
}
function solution41() {
    var cons = "bloodgroup";
    name="mic5"
    startDictation(cons,name)
}

// function solution51() {
//     var cons = "weight";
//     startDictation(cons,name)
// }
function solution52() {
    var cons = "registree_relaton";
    name="Registree_mic"
    startDictation(cons,name)
}

function solution61() {
    var cons = "phoneno1";
    name="mic6"
    startDictation(cons,name)
}
function solution62() {
    var cons = "phoneno2";
    name="mic7"
    startDictation(cons,name)
}

function solution71() {
    var cons = "contactemail";
    name="mic1"
    startDictation(cons,name)
}
function solution72() {
    var cons = "message";
    name="mic1"
    startDictation(cons,name)
}

function solution81() {
    var cons = "address1";
    name="mic8"
    startDictation(cons,name)
}
function solution82() {
    var cons = "registree_name";
    name="mic9"
    startDictation(cons,name)
}

function solution91() {
    var cons = "reason_for_emergency";
    name="emergency_cause_mic"
    startDictation(cons,name)
}
function solution92() {
    var cons = "medical_history";
    name="medical_history_mic"
    startDictation(cons,name)
}


// Doctor & Staff Section Javascript
function solution1() {
    var cons = "checkup_time";
    name="mic1"
    startDictation(cons,name)
}

function solution2() {
    var cons = "patient_id";
    name="mic1"
    startDictation(cons,name)
}
function solution3() {
    var cons = "patient_bp";
    name="mic1"
    startDictation(cons,name)
}
function solution4() {
    var cons = "patient_temp";
    name="mic1"
    startDictation(cons,name)
}
function solution5() {
    var cons = "patient_desc";
    name="mic1"
    startDictation(cons,name)
}
function solution6() {
    var cons = "next_checkup";
    name="mic1"
    startDictation(cons,name)
}