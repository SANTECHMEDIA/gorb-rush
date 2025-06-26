let score = 0;
function tap() {
  score++;
  document.getElementById('score').textContent = score;
  if (score === 100) {
    alert('🎉 You reached 100 taps! You win!');
  }
}