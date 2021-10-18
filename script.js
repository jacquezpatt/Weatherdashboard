var forecast = "bcca4d036d363451e0d97d2838d5f8fc"
var cityTemp = document.getElementById("cityTemp")
var humidityElement = document.getElementById("humidity")
var windspeedElement = document.getElementById("windspeed")
var uv = document.getElementById("uv")
var searchBtn = document.querySelector(".search-btn")
var cityInput = document.querySelector(".cityInput")

function getApi() {
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=charlotte&units=imperial&appid=bcca4d036d363451e0d97d2838d5f8fc';

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
windspeedElement.textContent =  "Wind Speed: " + windspeed + "mph"
    });
}

searchBtn.addEventListener("click", function() {
  event.preventDefault()
  getApi()
  });


