






    let humanScore  = 0;
    let computerScore = 0;
    if (humanScore >= 5) {humanScore === 0}
    else if (computerScore >= 5) {computerScore === 0} 




function getComputerChoice() {
    const randomNumber = Math.random();
    let result = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) { result = 'rock'; 

  } else if (randomNumber >= 1/3 && randomNumber  < 2/3) {result = 'paper'; 

  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {result = 'scissors'; }
  return result;
}

function getHumanChoice() {
  let choice = prompt('Select you choice')

  if (choice.toLowerCase() === 'rock') { return 'rock'; 

  } else if (choice.toLowerCase() === 'paper') { return 'paper';

  } else if (choice.toLowerCase() === 'scissors') {return 'scissors';}
  else {return null}

}



  function playgame() {
    playRound();
    
    
  function playRound(humanChoice, computerChoice) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    if (humanSelection === computerSelection) { console.log("It's Tie!");
    
    } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
      console.log('You win, computer lose!'); humanScore++;
  
    } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
      console.log('You lose, computer win!'); computerScore++;
  
    } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
      console.log('You win, computer lose!'); humanScore++;
  
    } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
      console.log('You lose, computer win!'); computerScore++;
  
    } else if (humanSelection === 'paper' && computerSelection === 'rock') {
      console.log('You win, computer lose!'); humanScore++;
  
    } else if (humanSelection === 'rock' && computerSelection === 'paper') {
      console.log('You lose, computer win!'); computerScore++;
    }
    
    
  }
  
  
    
  















}



















































