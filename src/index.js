function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response){
    console.log(response.data);
    let temperatureElement = document.querySelector("#real-Temp");
    let cityElement = document.querySelector("#location");
    let windElement = document.querySelector("#Wind");
    let humididtyElement = document.querySelector("#Humidity");
    let descriptionelement = document.querySelector("#description");
    let dateElement = document.querySelector("#currently");
    let iconElement = document.querySelector("#icon");
    temperatureElement.innerHTML = Math.round(response.data.main.temp) + "°F";
    cityElement.innerHTML = response.data.name;
    windElement.innerHTML = ("Wind Speed: " + (response.data.wind.speed) + "mph");
    humididtyElement.innerHTML =
      "Humidity: " + (response.data.main.humidity) + "%";
      descriptionelement.innerHTML = response.data.weather[0].description;
      dateElement.innerHTML = formatDate(response.data.dt * 1000); 
      iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
      iconElement.setAttribute("alt", response.data.weather[0].description);
      
}


let apiKey = "2f906aae967043ed6fad7710871d5c58";
let city = "Miami"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);