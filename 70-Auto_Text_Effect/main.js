const textElement = document.getElementById('text')
const speedElement = document.getElementById('speed')

const textContent = 'Front End Developer'

let index = 1
let speed = 300 / speedElement.value


writeText()


function writeText() {

    textElement.innerText = textContent.slice(0, index)

    index++

    if (index > textContent.length) {

        index = 1
    }

    setTimeout(writeText, speed)
}

speedElement.addEventListener('input', (e) => speed = 300 / e.target.value)