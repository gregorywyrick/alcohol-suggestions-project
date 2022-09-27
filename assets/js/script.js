//API Key: 7a70829eed4249369e766b2485bafa8d
var wineSuggestionEl = document.getElementById("#");
var wineResponeEl = document.getElementById("#"); 
var requestUrl = "https://api.spoonacular.com/food/wine/recommendation?wine=red_wine&apiKey=7a70829eed4249369e766b2485bafa8d";
//Cabernet, Pinot Grigio, Chardonnay, Merlot

fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
});

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
}

var wineSuggestionEl.addEventListner("submit", formSubmitHandler);