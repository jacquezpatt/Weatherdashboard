var forecast = "bcca4d036d363451e0d97d2838d5f8fc"
var cityTemp = document.getElementById("cityTemp")
var humidityElement = document.getElementById("humidity")
var windspeedElement = document.getElementById("windspeed")
var uv = document.getElementById("uv")
var searchBtn = document.querySelector(".search-btn")
var cityInput = document.querySelector(".cityInput")

function getApi(city) {
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=bcca4d036d363451e0d97d2838d5f8fc';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var cityName = data.name
      var temp = data.main.temp
      var humidity = data.main.humidity
      var windspeed = data.wind.speed
      cityTemp.textContent = cityName + ", " + temp + " F"
      humidityElement.textContent = "Humidity: " + humidity + "%"
      windspeedElement.textContent = "Wind Speed: " + windspeed + "mph"
    });
}

searchBtn.addEventListener("click", function () {
  event.preventDefault()
  getApi(cityInput.value)
  get5dayApi(cityInput.value);
});

function get5dayApi(city) {
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=bcca4d036d363451e0d97d2838d5f8fc'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.list.length; i++) {

        if (data.list[i].dt_txt.endsWith("12:00:00")) {
          var temp = data.list[i].main.temp
          var humidity = data.list[i].main.humidity
          var windSpeed = data.list[i].main.windSpeed
          var forecastSpot = document.getElementById("forecastSpot")
          var tempElement = document.createElement("h2");
          tempElement.textContent = temp + "F";
          forecastSpot.appendChild(tempElement);
          var humidityElement = document.createElement("h2");
          humidityElement.textContent = humidity;
          forecastSpot.appendChild(humidityElement);
          var windspeedElement = document.createElement("h3");
          windspeedElement.textContent = windSpeed;
          forecastSpot.appendChild(windspeedElement);
        }



      }
    })
}
