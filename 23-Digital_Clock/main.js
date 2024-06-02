const hoursElement = document.getElementById('hour')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')
const ampmElement = document.getElementById('ampm')


function updateClock() {

    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    let ampm = "AM"

    if (hours > 12) {

        hours -= 12
        ampm = "PM"
    }

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    hoursElement.innerText = hours
    minutesElement.innerText = minutes
    secondsElement.innerText = seconds
    ampmElement.innerText = ampm
    
    setTimeout( ()=> {

        updateClock()
    }, 1000)
}


updateClock()