const API_KEY = '74c9034426340e5923291511d8e00153'
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`

const formElement = document.getElementById('form')
const searchElement = document.getElementById('search')
const mainElement = document.getElementById('main')

getMovies(API_URL)

async function getMovies(url) {

    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

formElement.addEventListener('submit', (e) => {

    e.preventDefault()

    const searchTerm = searchElement.value

    if (searchTerm && searchTerm !== '') {

        getMovies(SEARCH_API + searchTerm)

        searchElement.value = ''

    } else {

        window.location.reload()
    }
})

function showMovies(movies) {

    mainElement.innerHTML = ''

    movies.forEach( (movie) => {

        const {title, poster_path, vote_average, overview} = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `

            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">

                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">

                <h3>Overview</h3>
                ${overview}
            </div>
        `

        mainElement.appendChild(movieEl)
    })
}

function getClassByRate(vote) {

    if (vote >= 8) {

        return 'green'

    } else if (vote >= 5) {

        return 'orange'

    } else {

        return 'red'
    }
}