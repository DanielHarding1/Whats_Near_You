var APIKey = "1";

// Searches for a cocktail by name
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

      $("#cocktail").text(JSON.stringify(data));
    });
});

function displayCocktail(data) {
  // How Do I Locate the information? 
  $("#cocktailName").text(data[0].drinks[0].strDrink);
  $("#cocktailIngredients").text(data.drinks[0].strIngredient1);
  $("#cocktailInstructions").text(data.drinks[0].strInstructions);
}

// Searches for cocktail by user input

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

// Searches for cocktail ingredients by selections
$("#selection-submit").on("click", function (event) {
  event.preventDefault();
  var alcohol = $("#selection").val();
  console.log(alcohol);

//   var ingredientQueryURL =
//     "https://thecocktaildb.com/api/json/v1/1/filter.php?i=" +
//     ingredient +
//     "&appid=" +
//     APIKey;

//   console.log(ingredientQueryURL);

//   fetch(ingredientQueryURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
});