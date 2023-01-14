const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const characterLengthText = document.getElementById("value");
const pwRange = document.getElementById("pwRange");
const generatePw = document.getElementById("generate-password");

let pw1 = document.getElementById("pw1");
let pw2 = document.getElementById("pw2");
let pw3 = document.getElementById("pw3");
let pw4 = document.getElementById("pw4");

generatePw.addEventListener("click", generatePassword);

function generateRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generatePassword() {
    pw1.value = "";
    pw2.value = "";
    pw3.value = "";
    pw4.value = "";

    for (let i = 0; i < pwRange.value; i++) {
        pw1.value += generateRandomCharacter();
        pw2.value += generateRandomCharacter();
        pw3.value += generateRandomCharacter();
        pw4.value += generateRandomCharacter();
    }
}

function copyPassword(passwordID) {
    let passID = Number(passwordID) - 1;

    let pass = document.getElementsByClassName("password")[passID];

    if (pass.value) {
        let copiedPassword = pass.value;
        navigator.clipboard.writeText(copiedPassword);
    }
}

function togglePw() {
    if (pw1.type === "password" 
        && pw2.type === "password"
        && pw3.type === "password"
        && pw4.type === "password") {
        pw1.type = "text";
        pw2.type = "text";
        pw3.type = "text";
        pw4.type = "text";
    } else {
        pw1.type = "password";
        pw2.type = "password";
        pw3.type = "password";
        pw4.type = "password";
    }
}

function renderPasswordLength() {
    characterLengthText.innerText = ` ${pwRange.value}`;
}

renderPasswordLength();