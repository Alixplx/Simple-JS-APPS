const containerElement = document.querySelector('.container')

const vloging = ["Youtuber", "Facebooker", "Instagramer", "Blogger","Tiktoker"]

let vlogIndex = 0

let characterIndex = 0

updateText()

function updateText() {

    characterIndex++
    containerElement.innerHTML = ` <h1>I am ${vloging[vlogIndex].slice(0,1) === "I" ? "an" : "a"} 
                                ${vloging[vlogIndex].slice(0,characterIndex)}</h1> `

    if (characterIndex === vloging[vlogIndex].length) {

        vlogIndex++
        characterIndex = 0
    }

    if (vlogIndex === vloging.length) {

        vlogIndex = 0
    }

    setTimeout( updateText , 400)
}