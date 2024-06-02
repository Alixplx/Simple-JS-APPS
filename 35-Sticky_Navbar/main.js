const navbarElement = document.querySelector('.navbar')

const bottomContainer = document.querySelector('.bottom-container')

window.addEventListener('scroll', ()=> {

    if (window.scrollY > bottomContainer.offsetTop - navbarElement.offsetHeight - 50) {

        navbarElement.classList.add('active')

    } else {

        navbarElement.classList.remove('active')
    }

})