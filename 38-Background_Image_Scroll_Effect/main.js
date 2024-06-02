const bgImgElement = document.getElementById('bg-image')



window.addEventListener('scroll', ()=> {

    updateImage()
})


function updateImage() {

    bgImgElement.style.opacity = 1 - window.scrollY / 900
    bgImgElement.style.backgroundSize = 160 - window.scrollY / 12 + "%"
}