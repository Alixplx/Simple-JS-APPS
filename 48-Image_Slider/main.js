const nextElement = document.querySelector('.next')
const imageContainer = document.querySelector('.image-container')
const imgElement = document.querySelectorAll('img')
const prevElement = document.querySelector('.prev')


let currentImage = 1
let timeOut


nextElement.addEventListener('click', ()=> {

    currentImage++
    clearTimeout(timeOut)
    scrollImage()
})

prevElement.addEventListener('click', ()=> {

    currentImage--
    clearTimeout(timeOut)
    scrollImage()
})

scrollImage()

function scrollImage() {

    if (currentImage > imgElement.length) {

        currentImage = 1

    } else if (currentImage < 1) {

        currentImage = imgElement.length
    }

    imageContainer.style.transform = `translateX(-${(currentImage - 1) * 500}px)`

    timeOut = setTimeout( ()=> {

        currentImage++
        scrollImage()
    }, 3000)
}