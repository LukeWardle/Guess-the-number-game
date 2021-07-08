let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9)
}

let humanGuess = 0;
let computerGuess = 0;
let targetNumbers = generateTarget();

const getAbsoluteDistance = (human, computer, target) => {
  const userDistance = Math.abs(target - human);
  const ComputerDistance = Math.abs(target - computer);
}

const compareGuesses = (humanGuess, computerGuess, targetNumbers) => 
     getAbsoluteDistance(humanGuess, targetNumbers) <= getAbsoluteDistance(computerGuess, targetNumbers) ? true : false ;

let outcome =  compareGuesses(humanGuess, computerGuess, targetNumbers) ? 'human' : 'computer';

const updateScore = (outcome) => {
  if (outcome === 'human') {
    humanScore += 1
  } else{
    computerScore += 1
  }
}

function advanceRound() {
    currentRoundNumber += 1;
};

updateScore('human');
console.log(humanScore);
updateScore('computer');
console.log(computerScore);
console.log( getAbsoluteDistance(5, 8))