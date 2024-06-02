const containerElement = document.querySelector('.image-container')
const buttonElement = document.querySelector('.btn')


buttonElement.addEventListener('click', ()=> {

    imgNumber = 10
    addNewImages()
})


function addNewImages() {

    for (let index = 0; index < imgNumber; index++) {

        const imgElement = document.createElement('img')
        imgElement.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 200)}`

        containerElement.appendChild(imgElement)
    }

}