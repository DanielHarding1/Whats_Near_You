tt.setProductInfo("Whats Near You", "V1");
tt.map({
  key: "qyRVte5GUbZjU2y2Z9LftPqp8OBwVPoa",
  container: "map",
});

var APIKey = "1";
var queryURL =
  "https://thecocktaildb.com/api/json/v1/1/filter.php?i=Gin&appid=" + APIKey;

fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(queryURL);
    console.log(data);
  });

$("#ingredient-submit").on("click", function (event) {
  event.preventDefault();
  var ingredient = $("#ingredient").val().trim();
  console.log(ingredient);
});
