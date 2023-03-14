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


function displayForecast() {
  let  forecastElement = document.querySelector("#forecast");
  
  let forecastHTMl = `<div class="row">`;
  let days = ["Mon", "Tue", "Wed", "Thurs", "Fri"]
days.forEach(function(day) {

forecastHTMl =
  forecastHTMl +
  `
        <div class="col-2"> <div class="day">${day}</div>
          <div class="temperatures"><span class="tempHigh">85°</span></div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAjdJREFUeNrtmsGtgzAMhjtCRmAERsgIHYFjjx2BERiBEToCI+TaG2+DbJBnKj8pD1Eaiv8AwpX+C1Ap/hzHjpNLCOFyZl0UgAJQAApAASgABaAAFIACODEA9C/83AypIrUkRwpv5Pib4dsCNp5cAMgIS3rMGPxJw3/t4QDQoEtSt8LwsTpJEFAAAONjNUM4HSIEOO7vJC8Mwa2FkHURZBDSM2KAWu4CwPP5LEgtyZMCy/OzIgKBgGA2BUAGliPDxxreldFM2EU4JAOgwRtSPeHdmj0/Z3z8fcEQasTCiATgEgxMURvNAkR2sOIA2MtBSH60KNbC4dAhAHhBACFDdrBiADj2A0DI7PA4AgB0dihWAaBBXUk92Hhkdqi+BsDGh8ySzg7tGgD9BgC88FrgvgKQIeY/ZgepxXB3m6EFm6bm7ADqQwDggSLUHQVA2KG6P50JQJ+a96UBuC08OwqRerOWGPftkUa7Oc/GrTBKo5b0mEivwzOLAlABjb8v6EY1CXVGgwCAampUqZ5NNP5fuS1aB6w87Zn1PG+XpStOKw3AIro5IONfM0e8EhRsZFxz7EYRACRmgQc0YPMAENrAdJk6UBgAKwojz/W/yQUgXgilARguS5dUd2Yir+foPzSQ7TAfifdLOjZvzhSzQID0A3gmuJTDzIQzRXg4IC9IvFsY68jzWxr/qgvQV2TsRJ1gwMXOIuW+JNWhjtx2DWCDE6fvAOhNUQWgABSAAlAACkABKAAFoABOp1+6Bd0LJ+BorgAAAABJRU5ErkJggg==" alt="" width="35"> </p>
   <div class="temperatures">
           <span class="tempLow">65°</span></div></div>
   `;

})

  



   forecastHTMl = forecastHTMl + `</div>`;

     forecastElement.innerHTML = forecastHTMl;
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


function search(city) {
let apiKey = "2f906aae967043ed6fad7710871d5c58";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}

search("Miami");
displayForecast();

let form = document.querySelector("#engine");
form.addEventListener("submit", handleSubmit);

