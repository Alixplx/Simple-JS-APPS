const API_KEY = "oguAdT8XfyZMVTFqOVZJHw==z2U0EW8d5j14F2lc"
const API_URL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

const buttonElement = document.getElementById('btn')
const jokeElement = document.getElementById('joke')

const options = {

    method: "GET",
    headers: {

        "X-Api-Key": API_KEY,
    }
}

async function generateJoke() {

    try {
        
        jokeElement.innerText = "Updating..."
        buttonElement.disabled = true
        buttonElement.innerText = "Loading..."

        const response = await fetch(API_URL, options)
        const data = await response.json()

        jokeElement.innerText = data[0].joke

        buttonElement.disabled = false
        buttonElement.innerText = "Generate a Joke"

    } catch (error) {
        
        jokeElement.innerText = "An Error Happened, Try Again"
        buttonElement.disabled = false
        buttonElement.innerText = "Generate a Joke"
    }
}

buttonElement.addEventListener('click', generateJoke)