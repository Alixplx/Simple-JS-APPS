const timerElemnt = document.getElementById('timer')
const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')

let startTime = 0
let elapsedTime = 0
let timerInterval


function startTimer() {

    startTime = Date.now() - elapsedTime

    timerInterval = setInterval( ()=> {

        elapsedTime = Date.now() - startTime
        startTime
        timerElemnt.textContent = formatTime(elapsedTime)
    }, 10)

    startButton.disabled = true
    stopButton.disabled = false
}

function formatTime(elapseTime) {

    const millSeconds = Math.floor((elapseTime % 1000) / 10)
    const seconds = Math.floor((elapseTime % (1000 * 60)) / 1000)
    const minutes = Math.floor(elapseTime % (1000 * 60 * 60) / (1000 * 60))
    const hours = Math.floor(elapseTime / (1000 * 60 * 60))

    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00")
        + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
        + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")
        + "." +
        (millSeconds > 9 ? millSeconds : "0" + millSeconds)
    )
}

function stopTimer() {

    clearInterval(timerInterval)
    startButton.disabled = false
    stopButton.disabled = true
}

function resetTimer() {

    clearInterval(timerInterval)

    elapsedTime = 0
    timerElemnt.textContent = "00:00:00"

    startButton.disabled = false
    stopButton.disabled = true

}

startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', stopTimer)
resetButton.addEventListener('click', resetTimer)