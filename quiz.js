function checkAnswer() {
    const correctAnswer = "4";
    // Get the selected answer (radio button)
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');

    if(!userAnswer) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange"
        return;
    }
    // if (userAnswer === correctAnswer) {}
    if (userAnswer.value === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        // feedback.style.color = "green";
    } else {
        feedback.textContent = "That's Incorrect, Try again!.";
        // feedback.style.color = "red";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);