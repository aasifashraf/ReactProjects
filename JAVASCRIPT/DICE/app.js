let btn = document.querySelector(".btn");
let reset = document.querySelector(".reset");
let turnNumber = document.querySelector(".turnnumber");
let score = document.querySelector(".score");
let userOne = document.querySelector(".userOne");
let userTwo = document.querySelector(".userTwo");

const arr = [1, 2, 3, 4, 5, 6];
let totalScore = 0;
let diceNumber = 0;
let manan = 0;
let aasif = 0;
let currentPlayer = 'manan'; // Start with Manan's turn

btn.addEventListener("click", () => {
    diceNumber = getRandomNumber();
    totalScore += arr[diceNumber];
    turnNumber.textContent = arr[diceNumber];
    score.textContent = totalScore;

    if (currentPlayer === 'manan') {
        manan += arr[diceNumber];
        currentPlayer = 'aasif';
    } else {
        aasif += arr[diceNumber];
        currentPlayer = 'manan';
    }

    userOne.textContent = ` ${manan}`;
    userTwo.textContent = ` ${aasif}`;
    console.log(manan, aasif)
});

let getRandomNumber = function () {
    return Math.floor(Math.random() * arr.length);
};

reset.addEventListener("click", () => {
manan = 0
aasif = 0
turNumber = 0
totalScore = 0

userOne.textContent = ` ${manan}`;
userTwo.textContent = ` ${aasif}`;
turnNumber.textContent = 0
score.textContent = totalScore;
})

console.log(manan, aasif)
