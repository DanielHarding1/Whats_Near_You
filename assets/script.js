var APIKey = "1";

// Searches for a cocktail by name
// To Do: How Do I Locate the information?
// To Do: Set the cocktail image as the background
$("#cocktail-submit").on("click", function (event) {
  event.preventDefault();
  var cocktail = $("#cocktail").val();
  console.log(cocktail);

  var cocktailQueryURL =
    "https://thecocktaildb.com/api/json/v1/1/search.php?s=" +
    cocktail +
    "&appid=" +
    APIKey;

  console.log(cocktailQueryURL);

  fetch(cocktailQueryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayCocktail(data);
      createButton(data.drinks);
      $("#cocktail").text(JSON.stringify(data));
    });
});

function displayCocktail(data) {
  console.log(data);
  $("#cocktailName").text(data.drinks[0].strDrink);
  $("#cocktailIngredients").text(data.drinks[0].strIngredient1);
  $("#cocktailInstructions").text(data.drinks[0].strInstructions);
}

function createButton(drinks) {
  $("#drinks-view").empty();
  for (var i = 0; i < drinks.length; i++) {
    var a = $("<button>");
    a.text(drinks[i].strDrink);
    $("#drinks-view").append(a);
    a.on("click", cocktailFinder);
  }
}

function cocktailFinder(s) {
  var search = s.target.textContent;
  console.log(search);
}

// Searches for cocktail by user input
// TO DO: Create a list of the drinks that could be made and then using their 'idDrink' search through this API : www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007 to find the cocktail name, ingredients and instructions
$("#ingredient-submit").on("click", function (event) {
  event.preventDefault();
  var ingredient = $("#ingredient").val();
  console.log(ingredient);

  var ingredientQueryURL =
    "https://thecocktaildb.com/api/json/v1/1/filter.php?i=" +
    ingredient +
    "&appid=" +
    APIKey;

  console.log(ingredientQueryURL);

  fetch(ingredientQueryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});

// Searches for cocktail by selections
// To Do: How do I ensure that the ingredient which has been selected is the one that is being searched for?
// To Do: Use the 'idDrink' to find the cocktail name, ingredients and instructions
$("#selection-submit").on("click", function (event) {
  event.preventDefault();
  var alcohol = $("#alcoholSelect input[name=selection]:checked").val();
  console.log(alcohol);

  var alcoholQueryURL =
    "https://thecocktaildb.com/api/json/v1/1/filter.php?i=" +
    alcohol +
    "&appid=" +
    APIKey;

  console.log(alcoholQueryURL);

  fetch(alcoholQueryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
