//API Key: 7a70829eed4249369e766b2485bafa8d
var wineList = document.querySelector('ul');
var rwButton = document.getElementById('rw-button');
var cabButton = document.getElementById('cabernet-button');
var pinotButton = document.getElementById('pinot-button');
var ChardonnayButton = document.getElementById('chardonnay-button');
var merlotButton = document.getElementById('merlot-button');
var requestUrl = "https://api.spoonacular.com/food/wine/recommendation?apiKey=7a70829eed4249369e766b2485bafa8d";
//Cabernet, Pinot Grigio, Chardonnay, Merlot

//for random cocktail
/*
function getRandom() {
    var requestUrl = "https://api.spoonacular.com/food/wine/recommendation?apiKey=7a70829eed4249369e766b2485bafa8d&wine=red";

fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        wineList.appendChild(listItem);
    }
});
}

rwButton.addEventListener('click', getRandom);
*/

//for Cabernet recommendation

function getCab() {
    var requestUrl = "https://api.spoonacular.com/food/wine/recommendation?wine=cabernet_sauvignon&apiKey=7a70829eed4249369e766b2485bafa8d";

fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        wineList.appendChild(listItem);
    }
});
}

cabButton.addEventListener('click', getCab);

//for Pinot Grigio recommendation
function getPinot() {
    var requestUrl = "https://api.spoonacular.com/food/wine/recommendation?apiKey=7a70829eed4249369e766b2485bafa8d&wine=pinot_grigio&number=1";

fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        wineList.appendChild(listItem);
    }
});
}

pinotButton.addEventListener('click', getPinot);

//for Chardonnay recommendation
function getChardonnay() {
    var requestUrl = "https://api.spoonacular.com/food/wine/recommendation?apiKey=7a70829eed4249369e766b2485bafa8d&wine=chardonnay&number=1";
    
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        wineList.appendChild(listItem);
    }
});
}

ChardonnayButton.addEventListener('click', getChardonnay);

//for Merlot recommendation
function getMerlot() {
    var requestUrl = "https://api.spoonacular.com/food/wine/recommendation?apiKey=7a70829eed4249369e766b2485bafa8d&wine=merlot&number=1";
    
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        wineList.appendChild(listItem);
    }
});
}

merlotButton.addEventListener('click', getMerlot);