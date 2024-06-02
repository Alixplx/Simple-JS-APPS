const calculateButton = document.getElementById('calcAgeBtn')
const birthdayField = document.getElementById('birthday')
const result = document.getElementById('result')

function calculateAge() {

    const birthdayValue = birthdayField.value
    
    if (birthdayValue === '') {
        alert('Please Enter a Valid Data')

    } else {

        const age = getAge(birthdayValue)
        result.innerText = `Your Age is ${age} ${age > 1 ? 'Years' : 'Year '} old`
    }
}

function getAge(birthdayValue) {

    const currentDate = new Date()
    const birthdayDate = new Date(birthdayValue)

    let getAge = currentDate.getFullYear() - birthdayDate.getFullYear()
    const getMonth = currentDate.getMonth() - birthdayDate.getMonth()

    if (getMonth < 0 || (getMonth === 0 && currentDate.getDate() < birthdayDate.getDate())) {

        getAge--
    }

    return getAge
}

calculateButton.addEventListener('click', calculateAge)