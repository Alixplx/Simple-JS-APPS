const counterElement = document.querySelectorAll('.counter')


counterElement.forEach( (counterEle)=> {

    counterEle.innerText = "0"
    incrementCounter()

    function incrementCounter() {

        let currentNumber = +counterEle.innerText
        const dataCeil = counterEle.getAttribute('data-ceil')
        const increment = dataCeil / 15
        currentNumber = Math.ceil( currentNumber + increment)

        if (currentNumber < dataCeil) {

            counterEle.innerText = currentNumber
            setTimeout( incrementCounter, 40 )

        } else {

            counterEle.innerText = dataCeil
        }
    }
})