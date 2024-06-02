const containerElement = document.querySelector('.container')


for (let index = 0; index < 28; index++) {

    const colorContainer = document.createElement('div')
    colorContainer.classList.add('color-container')

    containerElement.appendChild(colorContainer)
}

const colorContainerElement = document.querySelectorAll('.color-container')


generateColors()


function generateColors() {

    colorContainerElement.forEach( (colorContain)=> {

        const newColorCode = randomColor()
        colorContain.style.backgroundColor = "#" + newColorCode
        colorContain.innerText = "#" + newColorCode
    })
}

function randomColor() {

    const hexColor = "0123456789abcdef"
    const colorCodeLength = 6

    let colorCode = ""

    for (let colorLength = 0; colorLength < colorCodeLength; colorLength++) {

        const randomNumber = Math.floor( Math.random() * hexColor.length )
        colorCode += hexColor.substring(randomNumber, randomNumber + 1)
    }

    return colorCode
}