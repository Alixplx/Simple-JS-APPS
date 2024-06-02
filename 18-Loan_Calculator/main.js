function calcLoan() {

    loanAmount = document.getElementById('loan-amount').value
    interestRate = document.getElementById('interest-rate').value
    monthToPay = document.getElementById('month-to-pay').value

    interest = (loanAmount * (interestRate * 0.01)) / monthToPay

    monthlyPayment = (loanAmount / monthToPay + interest).toFixed(2)

    document.getElementById('payment').innerHTML = `

        Monthly Payment : ${monthlyPayment}
    `
}