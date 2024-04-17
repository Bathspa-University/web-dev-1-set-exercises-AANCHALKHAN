document.addEventListener('DOMContentLoaded', function() {
    const rgbDisplay = document.getElementById('rgb');
    const optionsContainer = document.getElementById('options');
    const message = document.getElementById('message');
    const scoreDisplay = document.getElementById('score-value');
    const replayBtn = document.getElementById('replay-btn');
  
    let score = 0;
    let lives = 5;
  
    // Function to generate a random RGB color
    function generateRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }
  
    // Function to generate options including the correct color
    function generateOptions() {
      const correctColor = generateRandomColor();
      rgbDisplay.textContent = correctColor;
  
      optionsContainer.innerHTML = '';
  
      // Create options including the correct color
      const options = [correctColor];
      while (options.length < 3) {
        const randomColor = generateRandomColor();
        if (!options.includes(randomColor)) {
          options.push(randomColor);
        }
      }
  
      // Shuffle options
      options.sort(() => Math.random() - 0.5);
  
      // Display options
      options.forEach(color => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.style.backgroundColor = color;
        optionDiv.addEventListener('click', function() {
          if (color === correctColor) {
            message.textContent = 'Correct!';
            score++;
          } else {
            message.textContent = 'Incorrect!';
            lives--;
          }
          scoreDisplay.textContent = score;
          if (lives === 0) {
            endGame();
          } else {
            generateOptions();
          }
        });
        optionsContainer.appendChild(optionDiv);
      });
    }
  
    // Function to end the game
    function endGame() {
      message.textContent = `Game Over! Final Score: ${score}`;
      replayBtn.style.display = 'block';
    }
  
    // Event listener for replay button
    replayBtn.addEventListener('click', function() {
      score = 0;
      lives = 5;
      scoreDisplay.textContent = score;
      message.textContent = '';
      replayBtn.style.display = 'none';
      generateOptions();
    });
  
    // Initialize the game
    generateOptions();
  });