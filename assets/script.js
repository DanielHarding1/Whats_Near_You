var APIKey = "1";

// Searches for a cocktail by name
$("#cocktail-submit").on("click", function (event) {
  event.preventDefault();
  var cocktail = $("#cocktail").val();
  console.log(cocktail);

  var cocktailQueryURL = "https://thecocktaildb.com/api/json/v1/1/search.php?s=" +
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
    });
});

// Searches for cocktail by ingredeitn
// TO DO: WORK OUT HOW TO MAKE THE ALCOHOLIC OPTIONS SELECT BUTTONS INSTEAD OF SEARCH ITEMS
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
