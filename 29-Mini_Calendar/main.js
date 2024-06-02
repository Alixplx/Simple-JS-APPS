const monthName = document.getElementById('month-name')
const dayName = document.getElementById('day-name')
const dayNumber = document.getElementById('day-number')
const year = document.getElementById('year')


const date = new Date()
const month = date.getMonth()

monthName.innerText = date.toLocaleDateString('en', {

    month: "long"
})

dayName.innerText = date.toLocaleDateString('en', {

    weekDay: "long"
})

dayName.innerText = date.getDate()

year.innerText = date.getFullYear()