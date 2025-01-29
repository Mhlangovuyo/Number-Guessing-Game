let numberToGuess = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let guessCount = 0;
let previousDifference = null;

// Elements
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submitGuessButton');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const messageBox = document.getElementById('messageBox');

// Enable submit button once user types in input
guessInput.addEventListener('input', () => {
  submitButton.disabled = !guessInput.value;  // Button gets enabled once the user types a value
});

submitButton.addEventListener('click', () => {
  const guess = parseInt(guessInput.value);
  guessCount++;

  // Calculate the difference between the guessed number and the target number
  const difference = Math.abs(numberToGuess - guess);

  if (guess === numberToGuess) {
    feedback.textContent = `🎉 Congratulations! You guessed the number in ${guessCount} tries!`;
    feedback.classList.remove('hot', 'cold', 'success');
    feedback.classList.add('success');
    messageBox.innerHTML = `<p class="message">Well done! You won!</p>`;
    submitButton.disabled = true; // Disable button after the game ends
  } else {
    // Give hot or cold feedback based on proximity
    if (previousDifference === null) {
      if (difference <= 10) {
        feedback.textContent = "Warm! You're getting close!";
        feedback.classList.add('hot');
      } else {
        feedback.textContent = "Cold! Try again.";
        feedback.classList.add('cold');
      }
    } else {
      if (difference < previousDifference) {
        feedback.textContent = "Hotter! You're getting closer!";
        feedback.classList.add('hot');
      } else {
        feedback.textContent = "Colder! You're moving away!";
        feedback.classList.add('cold');
      }
    }

    // Update attempts and previous difference
    attemptsDisplay.textContent = `Attempts: ${guessCount}`;
    previousDifference = difference;
  }

  // Clear input for the next guess
  guessInput.value = '';
  guessInput.focus();
});
