
// sets up function for the document to listen to events 

$(document).ready(function() {

    // jquery to store the city-input field to a variable on a button click

    $("#citySearchBtn").on("click", function() {
        var weatherSearch = $("#city-input").val()

        // logs city to console on button click
        console.log(weatherSearch)

        // TODO - make a button and append to the history section to search city history
        getWeather(weatherSearch)
    })

        // Event handler for if the user hits enter after entering the city search term
        $("#city-input").keypress(function(e){
        if(e.which == 13){
            $("#citySearchBtn").click();
            }
        });

    
        //this function runs the Open Weather API call displaying the current city, current weather, and five day forecast
    var getWeather = function(city) {
        
        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=5a03c4b84b5e9bfac4ce287b162bcdec";
    
        //make a request to the url
        fetch(apiUrl).then(function(response) {
            response.json().then(function(data) {
                console.log(data);
                //$("#weatherContainer").empty()
                var currentWeatherDiv = $("<div class='card-body' id='currentWeather'>");
                var city = data.name;
                var date = new Date();
                var val=(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
                var getCurrentWeatherIcon = data.weather[0].icon;
                //var currentWeatherDiv = $("<div>").addClass("card-body")
                var displayCurrentWeatherIcon = $("<img src = http://openweathermap.org/img/wn/" + getCurrentWeatherIcon + "@2x.png />");
                var currentCityEl = $("<h3 class = 'card-body'>").text(city+" ("+val+")");
                currentCityEl.append(displayCurrentWeatherIcon);
                currentWeatherDiv.append(currentCityEl);
                //var cityName = $("<h3>").addClass("card-body").text(data.name)
                //var temp = $("<p>").addClass("card-text").text(data.main.temp)
                //currentWeatherDiv.append(city)
                //currentWeatherDiv.append(temp)
                var getTemp = data.main.temp.toFixed(1);
                var tempEl = $("<p class='card-text'>").text("Temperature: "+getTemp+"° F");
                currentWeatherDiv.append(tempEl);
                var getHumidity = data.main.humidity;
                var humidityEl = $("<p class='card-text'>").text("Humidity: "+getHumidity+"%");
                currentWeatherDiv.append(humidityEl);
                var getWindSpeed = data.wind.speed.toFixed(1);
                var windSpeedEl = $("<p class='card-text'>").text("Wind Speed: "+getWindSpeed+" mph");
                currentWeatherDiv.append(windSpeedEl);
                var getLong = data.coord.lon;
                var getLat = data.coord.lat;

                //make a request to url

                var uvUrl = "https://api.openweathermap.org/data/2.5/uvi?appid=5a03c4b84b5e9bfac4ce287b162bcdec&lat="+getLat+"&lon="+getLong;
                    fetch(uvUrl).then(function(response) {
                        response.json().then(function(uvData) {
                            console.log(uvData);
                        })
                    })
                

                

                
                  


                $("#weatherContainer").append(currentWeatherDiv)
            });
        });
    };

});




//fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=5a03c4b84b5e9bfac4ce287b162bcdec").then(function(response) {
  //  response.json().then(function(data) {
    //    console.log(data);
    //});
//});
