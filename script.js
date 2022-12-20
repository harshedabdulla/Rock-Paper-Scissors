

const values = ["Rock", "Paper", "Scissors"]
function getComputerChoice() {
  let ran = Math.floor(Math.random() * 3);
  return values[ran]

}


function getResult(playerChoice, computerChoice) {
  let score = 0
  if (playerChoice === computerChoice) {
    score = 0


  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1

  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1

  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1


  } else {
    score = -1
  }


  return score

}


function showResult(score, playerChoice, computerChoice) {

  const lar = document.getElementById('result')
  switch (score) {
    case -1:
      lar.innerText = `You Lose!`
      break;
    case 0:
      lar.innerText = `It's a Draw!`
      break;
    case 1:
      lar.innerText = `You Win!`
      break;
  }
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText = `${Number(playerScore.innerText) + score}`
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value, computerChoice)
  showResult(score, playerChoice.value, computerChoice)
}


function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })


  const redButton = document.getElementById('endGameButton')
  redButton.onclick = () => endGame()
}

function endGame() {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()