"use strict";

//attach event listener to button
//listening for submit
//send post request
//append results to the DOM
$("#search-form").on("submit", handleClick)

function handleClick (evt) {
  evt.preventDefault();
  const searchText = $("#search-input");
  getGif(searchText);

  console.log("getGif =", getGif);
}

async function getGif(searchText) {
  const gifResponse = axios.post("http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym", {searchText});
  let response = await gifResponse
  console.log("await response= ", response);
}

//make ajax post request
//need to await for response
//console the response.data

//console.log("Let's get this party started!");