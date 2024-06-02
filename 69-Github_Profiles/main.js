const form = document.getElementById('form')
const main = document.getElementById('main')
const search = document.getElementById('search')


const API_URL = 'https://api.github.com/users/'


async function getUser(username) {

    try {
        
        const {data} = await axios(API_URL + username)

        createUserCard(data)
        getRepos(username)

    } catch (error) {
        
        if (error.response.status == 404) {

            createErrorCard('No Profile With This Username')
        }
    }
}

async function getRepos(username) {

    try {
        
        const {data} = await axios(API_URL + username + '/repos?sort=created')

        addReposToCard(data)

    } catch (error) {

        createErrorCard('Problem Fetching Repos')
    }
}

function addReposToCard(repos) {

    const reposElements = document.getElementById('repos')

    repos.slice(0, 5).forEach(repo => {

        const repoElement = document.createElement('a')

        repoElement.classList.add('repo')
        repoElement.href = repo.html_url
        repoElement.target = '_blank'
        repoElement.innerText = repo.name

        reposElements.appendChild(repoElement)
    })
}

function createUserCard(user) {

    const cardHTML = `

    <div class="card">

        <div>

            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>

        <div class="user-info">

            <h2>${user.name}</h2>
            <p>
                ${user.bio}
            </p>

            <ul>

                <li>${user.followers} <strong>Followers</strong> </li>
                <li>${user.following} <strong>Following</strong> </li>
                <li>${user.public_repos} <strong>Repos</strong> </li>
            </ul>

            <div id="repos"></div>
        </div>
    </div>
    `

    main.innerHTML = cardHTML
}

function createErrorCard(msg) {

    const cardHTML = `

        <div class="card"> 

            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const user = search.value

    if (user) {

        getUser(user)

        search.value = ''
    }
})