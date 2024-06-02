const inputElement = document.querySelector('.input')
const bodyElement = document.querySelector('body')

inputElement.checked = JSON.parse(localStorage.getItem("mode"))

updateBody()

function updateBody() {

    if (inputElement.checked) {

        bodyElement.style.backgroundColor = "black"

    } else {

        bodyElement.style.backgroundColor = "white"
    }
}

inputElement.addEventListener('input', ()=> {

    updateBody()
    saveModeStatus()
})

function saveModeStatus() {

    localStorage.setItem("mode", JSON.stringify(inputElement.checked))
}