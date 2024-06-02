const formElement = document.querySelector('.form')
const inputElement = document.querySelector('.input')
const ulElement = document.querySelector('.list')

let list = JSON.parse(localStorage.getItem('list'))

list.forEach( task => {

    todoList(task)
})

formElement.addEventListener('submit', (event)=> {

    event.preventDefault()
    todoList()
})


function todoList(task) {

    let newTask = inputElement.value

    if (task) {

        newTask = task.name
    }

    const listElement = document.createElement('li')

    if (task && task.checked) {

        listElement.classList.add('checked')
    }

    listElement.innerText = newTask
    
    ulElement.appendChild(listElement)
    inputElement.value = ""

    const checkButton = document.createElement('div')
    checkButton.innerHTML = `<i class="fas fa-check-square"></i>`
    listElement.appendChild(checkButton)

    const trashButton = document.createElement('div')
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`
    listElement.appendChild(trashButton)

    checkButton.addEventListener('click', ()=> {

        listElement.classList.toggle('checked')
        updateLocalStorage()
    })

    trashButton.addEventListener('click', ()=> {

        listElement.remove()
        updateLocalStorage()
    })

    updateLocalStorage()
}


function updateLocalStorage() {

    const listElement = document.querySelectorAll('li')
    list = []

    listElement.forEach( liEl => {

        list.push( {

            name: liEl.innerText,
            checked: liEl.classList.contains('checked')
        })
    })

    localStorage.setItem('list', JSON.stringify(list))
}