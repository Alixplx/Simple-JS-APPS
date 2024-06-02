const buttonElement = document.querySelector('.btn')
const videoElement = document.querySelector('.background-video')
const faElement = document.querySelector('.fa')

buttonElement.addEventListener('click', ()=> {

    if (buttonElement.classList.contains('pause')) {

        buttonElement.classList.remove('pause')
        videoElement.play()
        
        faElement.classList.add('fa-pause')
        faElement.classList.remove('fa-play')

    } else {

        buttonElement.classList.add('pause')
        videoElement.pause()

        faElement.classList.remove('fa-pause')
        faElement.classList.add('fa-play')
    }

})