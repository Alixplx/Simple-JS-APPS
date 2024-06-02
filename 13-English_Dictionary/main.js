const inputElement = document.getElementById('input')
const infoTextElement = document.getElementById('info-text')
const meaningContainer = document.getElementById('meaning-container')
const titleElement = document.getElementById('title')
const meaningElement = document.getElementById('meaning')
const audioElement = document.getElementById('audio')


async function fetchApi(word) {

    try {
        
        infoTextElement.style.display = "block"
        meaningContainer.style.display = "none"

        infoTextElement.innerText = `Searching The Meaning of "${word}"`
        const url = ` https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then( (response)=> response.json())

        if (result.title) {

            meaningContainer.style.display = "block"
            infoTextElement.style.display = "none"
            titleElement.innerText = word
            meaningElement.innerText = "No Definition"
            audioElement.style.display = "none"

        } else {

            infoTextElement.style.display = "none"
            meaningContainer.style.display = "block"
            audioElement.style.display = "inline-flex"
            titleElement.innerText = result[0].word
            meaningElement.innerText = result[0].meanings[0].definitions[0].definition
            audioElement.src = result[0].phonetics[0].audio
        }

    } catch (error) {
        
        infoTextElement.innerText = 'An Error Happened, Try Again'
    }
}

inputElement.addEventListener("keyup", (event)=> {

    if (event.target.value && event.key === "Enter") {

        fetchApi(event.target.value)
    }

})