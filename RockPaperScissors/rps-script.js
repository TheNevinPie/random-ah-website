const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultParagraph = document.getElementById("result");

rockButton.addEventListener("click", playRock);
paperButton.addEventListener("click", playPaper);
scissorsButton.addEventListener("click", playScissors);

function playRock() {
    const computerChoice = getComputerChoice();
    resultParagraph.textContent = `You chose Rock. Computer chose ${computerChoice}. ${determineWinner("Rock", computerChoice)}`;
}

function playPaper() {
    const computerChoice = getComputerChoice();
    resultParagraph.textContent = `You chose Paper. Computer chose ${computerChoice}. ${determineWinner("Paper", computerChoice)}`;
}

function playScissors() {
    const computerChoice = getComputerChoice();
    resultParagraph.textContent = `You chose Scissors. Computer chose ${computerChoice}. ${determineWinner("Scissors", computerChoice)}`;
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")) {
        return "You win!";
    }
    return "Computer wins!";
}
