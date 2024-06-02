const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slider')
const slideLeft = document.querySelector('.left-slider')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const sliderLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(sliderLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {

    const sliderHeight = sliderContainer.clientHeight

    if (direction === 'up') {

        activeSlideIndex++

        if (activeSlideIndex > sliderLength - 1) {

            activeSlideIndex = 0
        }

    } else if (direction === 'down') {

        activeSlideIndex--

        if (activeSlideIndex < 0) {

            activeSlideIndex = sliderLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}