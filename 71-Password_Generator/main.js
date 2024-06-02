const resultElement = document.getElementById('result')
const lengthElement = document.getElementById('length')
const upperCaseElement = document.getElementById('uppercase')
const lowerCaseElement = document.getElementById('lowercase')
const numbersElement = document.getElementById('number')
const symbolsElement = document.getElementById('symbols')
const generateElement = document.getElementById('generate')
const clipBoardElemenr = document.getElementById('clipboard')


const randomFunc = {

    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbols: getRandomSymbols
}

clipBoardElemenr.addEventListener('click', ()=> {

    const textarea = document.createElement('textarea')
    const password = resultElement.innerText

    if (!password) {

        return
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password Copied To Clipboard!')
})

generateElement.addEventListener('click', ()=> {

    const length = +lengthElement.value
    const hasLower = lowerCaseElement.checked
    const hasUpper = upperCaseElement.checked
    const hasNumber = numbersElement.checked
    const hasSymbols = symbolsElement.checked

    resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols, length)
})

function generatePassword(lower, upper, number, symbols, length) {

    let generatedPasswd = ''

    const typesCount = lower + upper + number + symbols
    const typesArr = [{lower}, {upper}, {number}, {symbols}].filter(item => Object.values(item)[0])

    if (typesCount === 0) {

        return ''
    }

    for (let i = 0; i < length; i += typesCount) {

        typesArr.forEach( type => {

            const funcName = Object.keys(type)[0]
            generatedPasswd += randomFunc[funcName]()
        })
    }

    const finalPasswd = generatedPasswd.slice(0, length)

    return finalPasswd
}

function getRandomLower() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {

    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbols() {

    const symbols = '!@#$%^&*(){}[]=<>/,.'

    return symbols[Math.floor(Math.random() * symbols.length)]
}