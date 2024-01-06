let copyBtn = document.querySelector(".fa-copy");
let resetBtn = document.querySelector(".fa-rotate-right");
let showPass = document.querySelector(".showpass");
let passwordLength = document.querySelector(".lengthinput");
let range = document.querySelector(".range");

let uppercasee = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let number = document.querySelector("#number");
let symbol = document.querySelector("#symbol");

const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_+=<>?';

let newPassword = '';
range.value = 8

// Set default checkboxes to true
checkBoxesTrue();
showPassword();

// Checkbox function setting default values
function checkBoxesTrue() {
    lowercase.checked = true;
    uppercasee.checked = true;
    number.checked = true;
    symbol.checked = true;
}

// Update clickable elements to generate new password
window.addEventListener("change", showPassword);

// Create a new password
function showPassword() {
    let password = '';
    let allCharacters = '';

    let passwordLengthValue = parseInt(range.value);

    // Check if the password length is too short
    if (passwordLengthValue < 5) {
        passwordLengthValue = 5;
        range.value = passwordLengthValue;
    }

    // Concatenate characters based on checkbox conditions
    allCharacters +=
        (lowercase.checked ? lowerCaseLetters : '') +
        (uppercasee.checked ? upperCaseLetters : '') +
        (number.checked ? numbers : '') +
        (symbol.checked ? symbols : '');

    // Generate password
    for (let i = 0; i < passwordLengthValue; i++) {
        let randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.charAt(randomIndex);
    }

    // Shuffle password
    newPassword = shuffleString(password);

    // Update UI elements
    passwordLength.value = passwordLengthValue;
    showPass.value = newPassword;
}

// Function to shuffle a string
function shuffleString(str) {
    return str.split('').sort(() => Math.random() - 0.5).join('');
}

// Event listener for copy button
copyBtn.addEventListener("click", copyInputValue);

// Function to copy password to clipboard
function copyInputValue() {
    if (newPassword) {
        showPass.select();
        document.execCommand('copy');
        showPass.setSelectionRange(0, 0);
        alert('Password copied to clipboard!');
    }
}

// Event listener for reset button
resetBtn.addEventListener("click", () => {
    showPass.value = 'Ayein!';
    setTimeout(() => {
        showPassword();
    }, 1000);
});
