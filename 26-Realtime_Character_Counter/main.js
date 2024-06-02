const textArea = document.getElementById('textarea')
const totalCounterElement = document.getElementById('total-counter')
const remainingCounterElement = document.getElementById('remaining-counter')


textArea.addEventListener('keyup', ()=> {

    updateCounter()
})

updateCounter()

function updateCounter() {

    totalCounterElement.innerText = textArea.value.length

    remainingCounterElement.innerText = textArea.getAttribute("maxLength") - textArea.value.length
}