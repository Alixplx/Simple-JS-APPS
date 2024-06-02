const currencyFirstElement = document.getElementById('currency-first')
const currencySecondElement = document.getElementById('currency-second')
const worthFirstElement = document.getElementById('worth-first')
const worthSecondElement = document.getElementById('worth-second')
const exchangeRateElement = document.getElementById('exchange-rate')

const API_ACCESS = "d258350619c6af2315597a6b"

updateRate()

async function updateRate() {

    await fetch(`https://v6.exchangerate-api.com/v6/${API_ACCESS}/latest/${currencyFirstElement.value}`).then((res)=> 
        res.json()).then( (data) => {

            const rate = data.conversion_rates[currencySecondElement.value]
                
            exchangeRateElement.innerText = `1 ${currencyFirstElement.value} = ${rate+ " " +currencySecondElement.value}`

            worthSecondElement.value = (worthFirstElement.value * rate).toFixed(3)
        })
}

currencyFirstElement.addEventListener('change', updateRate)
currencySecondElement.addEventListener('change', updateRate)

worthFirstElement.addEventListener('input', updateRate)