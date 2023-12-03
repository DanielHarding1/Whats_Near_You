$("#ingredient-submit").on("click", function (event) {
  event.preventDefault();
  var ingredient = $("#ingredient").val();
  console.log(ingredient);


var APIKey = "1";
var queryURL =
  "https://thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient + "&appid=" + APIKey;

console.log(queryURL);

fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
});

