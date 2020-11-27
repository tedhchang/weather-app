const express = require("express");
const https = require("https");


const app = express();






app.get("/", function(req, res) {
    
    //API url
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=e9971b41ee96543e0d4d47afc1fd6dc3"


    //Using https.get request over the internet, fetch some data
    https.get(url, function(response){
        console.log(response);

        //Response on when we recieve some data, then a callback function with the data
        response.on("data", function(data){
            
            //Convert data into a Javascript object
            const weatherData = JSON.parse(data);
            
            //Get needed data 
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+ icon + "@2x.png"

            //Res.send can only be used ONCE so use res.write for multiple
            res.write("<p>The weather is currently " + weatherDescription + "<p>");
            res.write("<h1>The temeprature in London is " + temp + " degrees.</h1>")
            res.write("<img src=" + imageURL + ">");


        })
    })
})




app.listen(3001, function() {
    console.log("Server is running on port 3001");
})





