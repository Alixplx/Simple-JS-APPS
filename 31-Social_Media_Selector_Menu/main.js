const menuElement = document.querySelector('.menu')
const menuTextElement = document.querySelector('.menu p')
const socialListElement = document.querySelector('.social-lists')
const arrowIconElement = document.querySelector('.menu .fas')
const liElement = document.querySelectorAll('.social-lists li')


menuElement.addEventListener('click', ()=> {

    socialListElement.classList.toggle('hide')
    menuElement.classList.toggle('rotate')
})

liElement.forEach( list => {

    list.addEventListener('click', ()=> {

        menuTextElement.innerHTML = list.innerHTML
        socialListElement.classList.add('hide')
        menuElement.classList.toggle('rotate')
    })
})