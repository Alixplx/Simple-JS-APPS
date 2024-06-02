const calculateButton = document.getElementById('calculate')
const billInput = document.getElementById('bill')
const tipInput = document.getElementById('tip')
const getTotal = document.getElementById('total')


function calculateTotal() {

    const billValue = billInput.value
    const tipValue = tipInput.value
    const totalValue = billValue * (1 + tipValue / 100)

    getTotal.innerText = totalValue.toFixed(2)
}

calculateButton.addEventListener('click', calculateTotal)