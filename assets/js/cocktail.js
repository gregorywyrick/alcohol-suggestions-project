var cocktailList = document.getElementById('inputbox');
var rcButton = document.getElementById('rc-button');
var teqButton = document.getElementById('tequila-button');
var ginButton = document.getElementById('gin-button');
var vodButton = document.getElementById('vodka-button');
var whiskButton = document.getElementById('whiskey-button');

//for random cocktail
function getrandom() {
var requestUrl = "https://thecocktaildb.com/api/json/v1/1/random.php";

fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('h3');
        listItem.textContent = data[i].strDrink;
        cocktailList.append(listItem);
    }
});
}

rcButton.addEventListener('click', getrandom);


// for vodka cocktail
function getVodka() {
var requestUrl = "https://thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";

fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        cocktailList.appendChild(listItem);
    }
});
}

vodButton.addEventListener('click', getVodka);

// for tequila cocktail
function getTequila() {
var requestUrl = "https://thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila";

fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        cocktailList.appendChild(listItem);
    }
});
}

teqButton.addEventListener('click', getTequila);

// for whiskey cocktail
function getWhiskey() {
var requestUrl = "https://thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey";

fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        cocktailList.appendChild(listItem);
    }
});
}

whiskButton.addEventListener('click', getWhiskey);

// for gin cocktail
function getGin() {
var requestUrl = "https://thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";


fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        cocktailList.appendChild(listItem);
    }
});
}

ginButton.addEventListener('click', getGin);