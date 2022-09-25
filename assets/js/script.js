//API Key: 7a70829eed4249369e766b2485bafa8d

var requestUrl = "https://api.spoonacular.com/food/wine/recommendation?wine=red_wine&apiKey=7a70829eed4249369e766b2485bafa8d";


fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
});