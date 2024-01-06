// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  

let userInput = parseInt(prompt("please enter Number"))

function randomNumber () {
 return Math.floor(Math.random() * 11)
}

userInput === randomNumber() ? alert("good work") : console.log("not matched")

console.log(randomNumber())