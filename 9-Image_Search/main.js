const accessKey = "JryDcxdAub_bmORoxjox4vbyAFMrRjmkqjTvzbRnYz0"

const formElement = document.querySelector("form")
const searchInputElement = document.getElementById("search_input")
const searchResultsElement = document.querySelector(".search_results")
const showMoreElement = document.getElementById("show_more")

let inputData = ""
let page = 1

async function searchImages() {

    inputData = searchInputElement.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    
    const response = await fetch(url)
    const data = await response.json()

    if (page === 1) {

        searchResultsElement.innerHTML = ""
    }

    const results = data.results
    
    results.map( (result) => {

        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search_result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description
        
        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)

        searchResultsElement.appendChild(imageWrapper)
    })

    page++

    if (page > 1) {

        showMoreElement.style.display = "block"
    }
}

formElement.addEventListener('submit', (event)=> {

    event.preventDefault()
    page = 1
    searchImages()
})

showMoreElement.addEventListener('click', ()=> {

    searchImages()
})