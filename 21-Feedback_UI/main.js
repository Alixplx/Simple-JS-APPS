const ratingElements = document.querySelectorAll('.rating')
const buttonElement = document.getElementById('btn')
const containerElement = document.getElementById('container')


let selectedRating = ''

ratingElements.forEach( (ratingElement) => {

    ratingElement.addEventListener('click', (event)=> {

        removeActive()
        selectedRating = event.target.innerText || event.target.parentNode.innerText
        event.target.classList.add('active')
        event.target.parentNode.classList.add('active')
    })
})

buttonElement.addEventListener('click', ()=> {

    if (selectedRating !== '') {

        containerElement.innerHTML = `

            <strong>Thank You!</strong>
            <br>
            <br>
            <strong>Feedback : ${selectedRating}</strong>
            <p>We'll Use Your Feedback to Improve Our Customer Support.</p>
        `
    }
})

function removeActive() {

    ratingElements.forEach( (ratingElement)=> {

        ratingElement.classList.remove('active')        
    })
}