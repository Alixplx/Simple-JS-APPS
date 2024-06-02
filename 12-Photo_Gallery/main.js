const ACCESS_KEY = "5CZvp4FZPoc7aI9rARAnwYLUucajcroMm0wyhsPCsOE"

const buttonElement = document.getElementById('btn')
const errorMessageElement = document.getElementById('errorMessage')
const galleryElement = document.getElementById('gallery')

async function getImages() {
    
    const inputValue = document.getElementById('input').value
    const randomNumber = Math.round( Math.random() * 1000 )
    
    if (inputValue > 10 || inputValue < 1) {

        errorMessageElement.style.display = "block"
        errorMessageElement.innerText = "Number Should Be Between 0 And 11"
        return
    }

    imagesUrls = ""

    try {

        const loading = `<img src="loading.svg">`
        galleryElement.innerHTML = loading

        await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${randomNumber}&client_id=${ACCESS_KEY}`).then( 
        (res)=> res.json().then( (data) => {

            if (data) {

                data.forEach(pic => {

                    imagesUrls += `<img src=${pic.urls.small} alt="Image">`
                    galleryElement.style.display = "block"
                    galleryElement.innerHTML = imagesUrls
                    errorMessageElement.style.display = "none"
                });
            }

        }))

    } catch (error) {
        
        errorMessageElement.style.display = "block"
        errorMessageElement.innerText = "An Error Happened, Try Again"
        buttonElement.style.display = "block"
        galleryElement.style.display = "none"
    }
}

buttonElement.addEventListener('click', getImages)