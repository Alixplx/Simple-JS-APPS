const containerElement = document.querySelector('.container')
const leftElement = document.querySelector('.left')
const righttElement = document.querySelector('.right')


leftElement.addEventListener('mouseenter', ()=> {

    containerElement.classList.add('active-left')
})

leftElement.addEventListener('mouseleave', ()=> {

    containerElement.classList.remove('active-left')
})

righttElement.addEventListener('mouseenter', ()=> {

    containerElement.classList.add('active-right')
})

righttElement.addEventListener('mouseleave', ()=> {

    containerElement.classList.remove('active-right')
})