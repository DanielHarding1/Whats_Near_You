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
var ttSearchBox = new tt.plugins.map(tt.services, options);
var searchBoxHTML = ttSearchBox.getSearchBoxHTML();
$(".map").append(searchBoxHTML);

var map = tt.map({
  key: "qyRVte5GUbZjU2y2Z9LftPqp8OBwVPoa",
  container: "map",
  center: [15.4, 53.0],
  zoom: 3,
});
var ttSearchBox = new tt.plugins.SearchBox(tt.services, options);
var searchMarkersManager = new SearchMarkersManager(map);

map.addControl(ttSearchBox, "top-left");

function handleResultsFound(event) {
  var results = event.data.results.fuzzySearch.results;

  if (results.length === 0) {
    searchMarkersManager.clear();
  }
  searchMarkersManager.draw(results);
  fitToViewport(results);
}

function handleResultSelection(event) {
  var result = event.data.result;
  if (result.type === "category" || result.type === "brand") {
    return;
  }
  searchMarkersManager.draw([result]);
  fitToViewport(result);
}

function fitToViewport(markerData) {
  if (!markerData || (markerData instanceof Array && !markerData.length)) {
    return;
  }
  var bounds = new tt.LngLatBounds();
  if (markerData instanceof Array) {
    markerData.forEach(function (marker) {
      bounds.extend(getBounds(marker));
    });
  } else {
    bounds.extend(getBounds(markerData));
  }
  map.fitBounds(bounds, { padding: 100, linear: true });
}

function getBounds(data) {
  var btmRight;
  var topLeft;
  if (data.viewport) {
    btmRight = [
      data.viewport.btmRightPoint.lng,
      data.viewport.btmRightPoint.lat,
    ];
    topLeft = [data.viewport.topLeftPoint.lng, data.viewport.topLeftPoint.lat];
  }
  return [btmRight, topLeft];
}

function handleResultClearing() {
  searchMarkersManager.clear();
}
ttSearchBox.on("tomtom.searchbox.resultsfound", handleResultsFound);
ttSearchBox.on("tomtom.searchbox.resultselected", handleResultSelection);
ttSearchBox.on("tomtom.searchbox.resultfocused", handleResultSelection);
ttSearchBox.on("tomtom.searchbox.resultscleared", handleResultClearing);
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
