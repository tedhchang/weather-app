const appId = "e9971b41ee96543e0d4d47afc1fd6dc3";
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



function getWeather(){
   const location =  document.getElementById("input").value;
   const url = "api.openweathermap.org/data/2.5/weather?units=imperial&q=" + location + "&appid=" + appId;
   const weatherData = JSON.stringify(url);
   console.log(weatherData.main.temp);
}




document.getElementById("button").addEventListener("click", function() {
    getWeather();
})
  







