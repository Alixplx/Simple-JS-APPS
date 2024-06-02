const buttonElement = document.querySelector('.btn')
const inputElement = document.getElementById('input')
const copyIcon = document.querySelector('.fa-copy')
const alertContainerElement = document.querySelector('.alert-container')


buttonElement.addEventListener('click', ()=> {

    createPasswd()
})

copyIcon.addEventListener('click', ()=> {

    copyPasswd()
    
    if (inputElement.value) {

        alertContainerElement.classList.remove('active')

        setTimeout( ()=> {

            alertContainerElement.classList.add('active')
        }, 2000)
    }

})

function createPasswd() {

    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwdLength = 14

    let passwd = ""

    for (let index = 0; index < passwdLength; index++) {

        const randomNumber = Math.floor( Math.random() * chars.length )
        passwd += chars.substring(randomNumber, randomNumber + 1)
    }

    inputElement.value = passwd
    alertContainerElement.innerText = passwd + " Copied!"
}

function copyPasswd() {

    inputElement.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(inputElement.value)
}