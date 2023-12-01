tt.setProductInfo("Whats Near You", "V1");
tt.map({
  key: "qyRVte5GUbZjU2y2Z9LftPqp8OBwVPoa",
  container: "map",
});

var options = {
  searchOptions: {
    key: "qyRVte5GUbZjU2y2Z9LftPqp8OBwVPoa",
    language: "en-GB",
    limit: 5,
  },
  autocompleteOptions: {
    key: "qyRVte5GUbZjU2y2Z9LftPqp8OBwVPoa",
    language: "en-GB",
  },
};

var ttSearchBox = new tt.plugins.SearchBox(tt.services, options);
var searchBoxHTML = ttSearchBox.getSearchBoxHTML();
$("#map").append(searchBoxHTML);

var APIKey = "1";
var queryURL =
  "https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita&appid=" +
  APIKey;
var time = 0;

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
