const buttonElement = document.getElementById('btn')
const bmiInputElement = document.getElementById('bmi-result')
const weightConditionElement = document.getElementById('weight-condition')


function calcBMI() {

    const heightValue = document.getElementById('height').value / 100
    const weigthValue = document.getElementById('weight').value

    const bmiValue = weigthValue / (heightValue * heightValue)

    bmiInputElement.value = bmiValue

    if (bmiValue < 18.5) {

        weightConditionElement.innerText = 'Under Weight'

    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {

        weightConditionElement.innerText = 'Normal Weight'

    } else if (bmiValue >= 25 && bmiValue <= 29.9) {

        weightConditionElement.innerText = 'Over Weight'

    } else if (bmiValue >= 30) {

        weightConditionElement.innerText = 'Obesity'
    }
}


buttonElement.addEventListener('click', calcBMI)