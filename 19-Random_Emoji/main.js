const buttonElement = document.getElementById('btn')
const emojiNameElement = document.getElementById('emoji-name')


const API_KEY = "a82f7fbec344567e0db3fd99049498599c17d9bd"

const emoji = []

async function getEmoji() {

    let response = await fetch(`https://emoji-api.com/emojis?access_key=${API_KEY}`)

    data = await response.json()

    for (let i = 0; i < 1500; i++) {

        emoji.push({

            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        })
    }
}

getEmoji()


buttonElement.addEventListener('click', ()=> {

    const randomNumber = Math.floor( Math.random() * emoji.length)
    buttonElement.innerText = emoji[randomNumber].emojiName
    emojiNameElement.innerText = emoji[randomNumber].emojiCode
})