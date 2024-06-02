const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')
const timerElement = document.getElementById('timer')

let interval
let timeLeft = 10

function updateTimer() {

    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    let formattedTime = `${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`

    timerElement.innerHTML = formattedTime
}

function startTimer() {

    interval = setInterval( ()=> {

        timeLeft--
        updateTimer()
        if(timeLeft === 0) {

            clearInterval(interval)
            alert("Time's Up!")
            timeLeft = 1500
            updateTimer()
        }
    }, 1000)
}

function stopTimer() {

    clearInterval(interval)
}

function resetTimer() {

    clearInterval(interval)
    timeLeft = 1500
    updateTimer()
}

startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', stopTimer)
resetButton.addEventListener('click', resetTimer)