
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

    

    var getWeather = function(city) {
        // format the github api url
        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=5a03c4b84b5e9bfac4ce287b162bcdec";
    
        //make a request to the url
        fetch(apiUrl).then(function(response) {
            response.json().then(function(data) {
                console.log(data);
                $("#weatherContainer").empty()
                var currentWeather = $("<div>").addClass("card-body")
                var cityName = $("<h3>").addClass("card-body").text(data.name)
                currentWeather.append(cityName)
                var temp = $("<p>").addClass("card-text").text(data.main.temp)
                currentWeather.append(temp)



                
                // TODO add additional items in the weather container before appending the weatherContainer    


                $("#weatherContainer").append(currentWeather)
            });
        });
    };

});




//fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=5a03c4b84b5e9bfac4ce287b162bcdec").then(function(response) {
  //  response.json().then(function(data) {
    //    console.log(data);
    //});
//});
