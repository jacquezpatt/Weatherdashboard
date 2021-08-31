var forecast= "bcca4d036d363451e0d97d2838d5f8fc"
//https://api.openweathermap.org/data/2.5/weather?q=charlotte&appid=bcca4d036d363451e0d97d2838d5f8fc
//https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=

function getApi() {
    // replace `octocat` with anyone else's GitHub username
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=charlotte&appid=bcca4d036d363451e0d97d2838d5f8fc';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      });
  }
  getApi()