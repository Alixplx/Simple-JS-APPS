const tagsElement = document.getElementById('tags')
const textAreaElement = document.getElementById('textarea')


textAreaElement.focus()

textAreaElement.addEventListener('keyup', (event)=> {

    createTags(event.target.value)

    if (event.key === "Enter") {

        setTimeout(() => {
            
            event.target.value = ''

        }, 10);

        randomSelect()
    }
})

function createTags(input) {

    const tags = input.split(' ').filter( tag => tag.trim() !== '').map(tag => tag.trim())

    tagsElement.innerHTML = ''

    tags.forEach( tag => {

        const tagElement = document.createElement('span')
        tagElement.classList.add('tag')
        tagElement.innerText = tag
        
        tagsElement.appendChild(tagElement)
    })
}

function randomSelect() {

    const times = 30

    const interval = setInterval( ()=> {

        const randomTag = randomPick()
        
        highlightTag(randomTag)

        setTimeout( ()=> {

            unHighlightTag(randomTag)
        }, 100)

    }, 100)

    setTimeout( ()=> {

        clearInterval(interval)

        setTimeout( ()=> {

            const randomTag = randomPick()

            highlightTag(randomTag)
            
        }, 100)

    }, times * 100)
}

function randomPick() {

    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {

    tag.classList.add('highlight')
}

function unHighlightTag(tag) {

    tag.classList.remove('highlight')
}