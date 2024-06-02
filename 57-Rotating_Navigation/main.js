const openButton = document.getElementById('open')
const closeButton = document.getElementById('close')
const containerElement = document.querySelector('.container')


openButton.addEventListener('click', ()=> containerElement.classList.add('show-nav'))

closeButton.addEventListener('click', ()=> containerElement.classList.remove('show-nav'))