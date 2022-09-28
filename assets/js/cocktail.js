var cocktailList = document.getElementById('inputbox');
var rcButton = document.getElementById('rc-button');
var teqButton = document.getElementById('tequila-button');
var ginButton = document.getElementById('gin-button');
var vodButton = document.getElementById('vodka-button');
var whiskButton = document.getElementById('whiskey-button');

//for random cocktail
function getrandom() {
var requestUrl = "https://thecocktaildb.com/api/json/v1/1/random.php";
$('#inputbox').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function ({drinks}) {
    console.log(drinks);
    for (var i = 0; i < drinks.length; i++) {
        var listItem = document.createElement('p');
        var cocktailSteps = document.createElement('li');
        listItem.textContent = drinks[i].strDrink;
        cocktailSteps.textContent = drinks[i].strInstructions;
        cocktailList.append(listItem);
        cocktailList.append(cocktailSteps);
    }
});
}

rcButton.addEventListener('click', getrandom);


// for vodka cocktail
function getVodka() {
var requestUrl = "https://thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";
$('#inputbox').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function ({drinks}) {
    console.log(drinks);
    for (var i = 0; i < drinks.length; i++) {
        var listItem = document.createElement('p');
        listItem.textContent = drinks[i].strDrink;
        cocktailList.append(listItem);
    }
});
}

vodButton.addEventListener('click', getVodka);

// for tequila cocktail
function getTequila() {
var requestUrl = "https://thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila";
$('#inputbox').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function ({drinks}) {
    console.log(drinks);
    for (var i = 0; i < drinks.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = drinks[i].strDrink;
        cocktailList.appendChild(listItem);
    }
});
}

teqButton.addEventListener('click', getTequila);

// for whiskey cocktail
function getWhiskey() {
var requestUrl = "https://thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey";
$('#inputbox').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function ({drinks}) {
    console.log(drinks);
    for (var i = 0; i < drinks.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = drinks[i].strDrink;
        cocktailList.appendChild(listItem);
    }
});
}

whiskButton.addEventListener('click', getWhiskey);

// for gin cocktail
function getGin() {
var requestUrl = "https://thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";
$('#inputbox').empty();
fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function ({drinks}) {
    console.log(drinks);
    for (var i = 0; i < drinks.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = drinks[i].strDrink;
        cocktailList.appendChild(listItem);
    }
});
}

ginButton.addEventListener('click', getGin);