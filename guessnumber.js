
// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Select elements
const message = document.getElementById('message');
const guessInput = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const resetBtn = document.getElementById('resetBtn');
const result = document.getElementById('result');

// Function to check the guess
function checkGuess() {
  const userGuess = Number(guessInput.value);
  attempts++;

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100!';
    return;
  }

  if (userGuess === secretNumber) {
    result.textContent = `🎉 Correct! The number was ${secretNumber}. Attempts: ${attempts}`;
    result.style.color = 'green';
    disableGame();
  } else if (userGuess < secretNumber) {
    message.textContent = 'Too low! Try again.';
    result.textContent = '';
  } else {
    message.textContent = 'Too high! Try again.';
    result.textContent = '';
  }

  guessInput.value = '';
  guessInput.focus();
}

// Function to reset the game
function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.textContent = 'Enter a number between 1 and 100:';
  result.textContent = '';
  result.style.color = '#000';
  guessInput.value = '';
  guessInput.disabled = false;
  checkBtn.disabled = false;
}

// Disable game after correct guess
function disableGame() {
  guessInput.disabled = true;
  checkBtn.disabled = true;
}

// Event listeners
checkBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);
