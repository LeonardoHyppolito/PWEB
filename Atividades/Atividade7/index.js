document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('rock').addEventListener('click', function() {
      playRound('rock');
    });
  
    document.getElementById('paper').addEventListener('click', function() {
      playRound('paper');
    });
  
    document.getElementById('scissors').addEventListener('click', function() {
      playRound('scissors');
    });
  });
  
  function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection) {
    const computerSelection = computerPlay();
    const result = getResult(playerSelection, computerSelection);
  
    const resultText = `Você escolheu ${playerSelection}. O computador escolheu ${computerSelection}. ${result}`;
  
    document.getElementById('result').textContent = resultText;
  }
  
  function getResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Empate!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return "Você ganhou!";
    } else {
      return "Você perdeu!";
    }
  }
  