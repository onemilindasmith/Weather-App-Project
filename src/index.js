function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay();
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
    temperatureElement.innerHTML = Math.round(response.data.main.temp) + "°F";
    cityElement.innerHTML = response.data.name;
    windElement.innerHTML = ("Wind Speed: " + (response.data.wind.speed) + "mph");
    humididtyElement.innerHTML =
      "Humidity: " + (response.data.main.humidity) + "%";
      descriptionelement.innerHTML = response.data.weather[0].description;
      dateElement.innerHTML = formatDate(response.data.dt * 1000); 
}


let apiKey = "2f906aae967043ed6fad7710871d5c58";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);