let userChosen;
let computerChosen;
var result = results();

const displayResult = document.getElementById("result");
const computerChoice = document.getElementById("computer-choice");
const randomNumber = Math.floor(Math.random() * Math.floor(3));
// ath.round(Math.random() * 3);
const userChoice = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll(".choices");

//event
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChosen = e.target.id;
    GenerateCompChoice();
    results();
    userChoice.innerHTML = userChosen;
    computerChoice.innerHTML = computerChosen;
    displayResult.innerHTML = result;
  })
);

//function generate Computer Choose
function GenerateCompChoice() {
  if (randomNumber === 0) {
    computerChosen = "rock";
  } else if (randomNumber === 1) {
    computerChosen = "paper";
  } else if (randomNumber === 2) {
    computerChosen = "scissors";
  }
}
console.log(randomNumber);
console.log(computerChosen);

//get resulst
function results() {
  if (computerChosen === userChosen) {
    return (result = "There was a tie!");
  } else if (computerChosen === "rock" && userChosen === "paper") {
    return (result = "You win! Paper covers rock!");
  } else if (computerChosen === "rock" && userChosen === "scissors") {
    return (result = "You lost!");
  } else if (computerChosen === "paper" && userChosen === "rock") {
    return (result = "You lost!");
  } else if (computerChosen === "paper" && userChosen === "scissors") {
    return (result = "You win!");
  } else if (computerChosen === "scissors" && userChosen === "rock") {
    return (result = "You win!");
  } else if (computerChosen === "scissors" && userChosen === "paper") {
    return (result = "You lost! Sorry...");
  }
}
