const questionsElement = document.querySelectorAll('.question')


questionsElement.forEach( (question)=> {

    const button = question.querySelector('.question-btn')

    button.addEventListener('click', ()=> {

        question.classList.toggle('show-text')
    })
})