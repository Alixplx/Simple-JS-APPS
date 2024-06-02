const API_KEY = "118845b254a88108b332bc19dadfba9d"

const weatherDataElement = document.getElementById("weather-data")
const cityInputElement = document.getElementById("city-input")
const formElement = document.querySelector("form")

formElement.addEventListener('submit', (event)=> {

    event.preventDefault()

    const cityValue = cityInputElement.value

    getWeatherData(cityValue)
})

async function getWeatherData(cityValue) {

    try {
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`)
        
        if (!response.ok) {

            throw new Error("Network Response Was Not OK")
        }

        const data = await response.json()
        const temp = Math.round(data.main.temp)
        const desc = data.weather[0].description
        const icon = data.weather[0].icon
        const details = [`Feels Like: ${Math.round(data.main.feels_like)}`, 
                         `Humidity : ${data.main.humidity}%`, `Wind speed : ${data.wind.speed} m/s`
                        ]

        weatherDataElement.querySelector(".icon").innerHTML = 
        `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`

        weatherDataElement.querySelector(".temperature").textContent = `${temp}°C`
        weatherDataElement.querySelector(".description").textContent = desc

        weatherDataElement.querySelector(".details").innerHTML = details.map( (detail)=> `
            <div>${detail}</div>
        `).join("")
        
    } catch (error) {
        
        weatherDataElement.querySelector(".icon").innerHTML = ""

        weatherDataElement.querySelector(".temperature").textContent = ""
        weatherDataElement.querySelector(".description").textContent = "An Error Happened, Please Try Again"

        weatherDataElement.querySelector(".details").innerHTML = ""
    }
}