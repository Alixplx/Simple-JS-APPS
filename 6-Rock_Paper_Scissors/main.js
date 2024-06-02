const buttons = document.querySelectorAll('button')
const resultElement = document.getElementById('result')
const userScoreElement = document.getElementById('user-score')
const AIScoreElement = document.getElementById('ai-score')

const rock = "rock"
const paper = "paper"
const scissors = "scissors"

let playerScore = 0
let AIScore = 0

buttons.forEach( button => {

    button.addEventListener('click', ()=> {

        const result = playRound(button.id, AIPlay())
        resultElement.textContent = result
    })
})

function AIPlay() {

    const choices = [rock, paper, scissors]
    const randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

function playRound(playerSelection, AISelection) {

    if (playerSelection === AISelection) {

        playerScore++
        AIScore++
        userScoreElement.innerHTML = playerScore
        AIScoreElement.innerHTML = AIScore
        return "It's a Tie"

    } else if (
        (playerSelection === rock && AISelection === scissors) ||
        (playerSelection === paper && AISelection === rock) ||
        (playerSelection === scissors && AISelection === paper)
    ) {

        playerScore++
        userScoreElement.innerHTML = playerScore
        return playerSelection + ": You Win The AI Because it Selected : " + AISelection

    } else {

        AIScore++
        AIScoreElement.innerHTML = AIScore
        return AISelection + ": You Lost! The AI Beat You Because you Selected : " + playerSelection
    }
}