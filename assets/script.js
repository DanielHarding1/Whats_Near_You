var time = 0;


var APIKey = "1";
var queryURL = "https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita&appid=" + APIKey;

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(queryURL);
        console.log(data);
    })