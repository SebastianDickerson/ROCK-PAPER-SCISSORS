const game = () => {

  let pScore = 0;
  let cScore = 0;

  //start game - fade out intro, fade in game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const matchScreen = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      matchScreen.classList.add('fadeIn');
    });
  };
  
  //play match 
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const compHand = document.querySelector('.comp-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = '';
      });
    });
    //computer options
    const compOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        console.log(this);
        //Computer Choice
        const compNumber = Math.floor(Math.random() * 3);
        const compChoice = compOptions[compNumber];
        
        setTimeout(() => {
          //call check winner 
          checkWinner(this.id, compChoice);

          //update hands
          playerHand.src = `./images/${this.id}.svg`
          compHand.src = `./images/${compChoice}.svg`
        }, 0900);
        //animation
        playerHand.style.animation = "shakePlayer 1s ease";
        compHand.style.animation = "shakeComp 1s ease";
      });    
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    playerScore.textContent = pScore;
    const compScore = document.querySelector('.comp-score p');
    compScore.textContent = cScore;

  };

  //check winner
  const checkWinner = (playerChoice, compChoice) => {
    const winner = document.querySelector('.winner');
    //check Tie
    if (playerChoice === compChoice) {
      winner.textContent = 'It is a tie!';
      return;
    };
    //check rock
    if (playerChoice === 'rock') {
      if(compChoice === 'scissors'){
        winner.textContent = 'You win!';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'You lose!';
        cScore++;
        updateScore();
        return;
      };
    };
    //check paper
    if (playerChoice === 'paper') {
      if(compChoice === 'rock'){
        winner.textContent = 'You win!';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'You lose!';
        cScore++;
        updateScore();
        return;
      };
    };
    //check scissors
    if (playerChoice === 'scissors') {
      if(compChoice === 'paper'){
        winner.textContent = 'You win!';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'You lose!';
        cScore++;
        updateScore();
        return;
      };
    };
  };
  
  startGame(); 
  playMatch();
};

game();
