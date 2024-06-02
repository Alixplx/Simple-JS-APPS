const barsElement = document.querySelector('.fa-bars')
const sideBarElement = document.querySelector('.sidebar')
const closingButtonElement = document.querySelector('.fa-times')


barsElement.addEventListener('click', ()=> {

    sideBarElement.classList.toggle('show-sidebar')
})

closingButtonElement.addEventListener('click', ()=> {

    sideBarElement.classList.remove('show-sidebar')
})