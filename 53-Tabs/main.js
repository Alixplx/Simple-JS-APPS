const tabs = document.querySelector('.tabs')
const buttons = document.querySelectorAll('.btn')
const artices = document.querySelectorAll('.content')


tabs.addEventListener('click', (event)=> {

    const id = event.target.dataset.id

    if (id) {

        buttons.forEach( (button)=> {

            button.classList.remove('live')
        })

        event.target.classList.add('live')

        artices.forEach( (article)=> {

            article.classList.remove('live')
        })

        const element = document.getElementById(id)
        element.classList.add('live')
    }
})