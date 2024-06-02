const counterElement = document.querySelector('.counter')
const barElement = document.querySelector('.loading-bar-front')

let progress = 0


updateLoading()


function updateLoading() {

    counterElement.innerText = progress + "%"
    barElement.style.width = progress + "%"
    progress++

    if (progress < 101) {

        setTimeout( updateLoading, 20)
    }
}