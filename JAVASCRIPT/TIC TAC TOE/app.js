// Selecting necessary DOM elements
let heading = document.querySelector(".heading");
let boxes = document.querySelectorAll(".box");
let score = document.querySelector(".winner");
let newGameBtn = document.querySelector(".newgame");

// Winning patterns for Tic Tac Toe
let winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let turn0 = true; // Indicates whose turn it is, true for 'O', false for 'X'

// Changing heading color on mouseover
heading.addEventListener("mouseover", (e) => {
    e.target.style.color = "black";
    // Reset color after 2 seconds
    setTimeout(() => {
        e.target.style.color = "";
    }, 2000);
});

// Functionality when a box is clicked
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        // Check if box is empty and it's player O's turn
        if (turn0 && e.target.innerText === "") {
            e.target.innerText = "O";
            turn0 = false; // Switch to player X's turn
            e.target.disabled = true; // Disable the box
            checkWinner(); // Check if there's a winner
        } else if (!turn0 && e.target.innerText === "") {
            // Check if box is empty and it's player X's turn
            e.target.innerText = "X";
            turn0 = true; // Switch to player O's turn
            e.target.disabled = true; // Disable the box
            checkWinner(); // Check if there's a winner
        }
    });
});

// Function to check for a winner
const checkWinner = () => {
    for (let pattern of winningPattern) {
        const [a, b, c] = pattern.map(index => boxes[index].innerText);
        // console.log(a, b, c)

        if (a !== "" && a === b && b === c) {
            // Display winner and reset the game after 5 seconds
            score.innerText = `Congratulations! ${a} You Won. Resetting in 5 seconds.`;
            disableAllBoxes(); // Disable all boxes
            setTimeout(resetGame, 5000); // Reset the game after 5 seconds
            return; // Exit the function
        }
    }
};

// Function to disable all boxes
const disableAllBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

// Function to reset the game
const resetGame = () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false; // Enable all boxes
    });
    turn0 = true; // Reset the turn to player O
    score.innerText = ""; // Clear the winner display
};

// Event listener for the new game button
newGameBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false; // Enable all boxes for a new game
    });
    turn0 = true; // Reset the turn to player O
    score.innerText = "You started a New Game."; // Display new game message
});







// const checkWinner = () => {
//     for (let pattern of winningPattern) {
//         // Extracting values of three boxes (indexes) from the current winning pattern
//         const [a, b, c] = pattern.map(index => boxes[index].innerText);

//         // Checking if the three boxes have the same non-empty value and are equal
//         if (a !== "" && a === b && b === c) {
//             // Displaying a message announcing the winner
//             score.innerText = `Congratulations! ${a} You Won. Resetting in 5 seconds.`;

//             // Disable all boxes to prevent further moves
//             disableAllBoxes();

//             // Reset the game after a 5-second delay
//             setTimeout(resetGame, 5000);

//             // Exit the function as we've found a winner
//             return;
//         }
//     }
// };
