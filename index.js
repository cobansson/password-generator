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

function generateRandomIndex() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generatePassword() {
    let pwArray1 = [];
    let pwArray2 = [];
    let pwArray3 = [];
    let pwArray4 = [];

    pw1.value = "";
    pw2.value = "";
    pw3.value = "";
    pw4.value = "";

    for (let i = 0; i < pwRange.value; i++) {
        pwArray1.push([generateRandomIndex()]);
        pwArray2.push([generateRandomIndex()]);
        pwArray3.push([generateRandomIndex()]);
        pwArray4.push([generateRandomIndex()]);
    }

    for (let i = 0; i < pwArray1.length; i++) {
        pw1.value += pwArray1[i];
    }

    for (let i = 0; i < pwArray2.length; i++) {
        pw2.value += pwArray2[i];
    }

    for (let i = 0; i < pwArray3.length; i++) {
        pw3.value += pwArray3[i];
    }

    for (let i = 0; i < pwArray4.length; i++) {
        pw4.value += pwArray4[i];
    }
}

function copyPassword1() {
    if (pw1.value) {
        let copiedPassword = pw1.value;
        navigator.clipboard.writeText(copiedPassword);
    }
}

function copyPassword2() {
    if (pw2.value) {
        let copiedPassword = pw2.value;
        navigator.clipboard.writeText(copiedPassword);
    }
}

function copyPassword3() {
    if (pw3.value) {
        let copiedPassword = pw3.value;
        navigator.clipboard.writeText(copiedPassword);
    }
}

function copyPassword4() {
    if (pw4.value) {
        let copiedPassword = pw4.value;
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