const starElement = document.querySelectorAll('.fa-star')
const emojiElement = document.querySelectorAll('.far')

const colors = ["red", "orange", "lightblue", "lightgreen", "green"]

starElement.forEach( (starEle, index) => {

    starEle.addEventListener('click', ()=> {

        updateRating(index)
    })
})

updateRating(0)

function updateRating(index) {

    starElement.forEach( (starEl, idx) => {

        if (idx < index + 1) {

            starEl.classList.add('active')

        } else {

            starEl.classList.remove('active')
        }
    })

    emojiElement.forEach( (emojiEle) => {

        emojiEle.style.transform = `translateX(-${index * 50}px)`
        emojiEle.style.color = colors[index]
    })
}