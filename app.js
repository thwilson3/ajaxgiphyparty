"use strict";

//attach event listener to button
//listening for submit
//send post request
//append results to the DOM
$("#search-form").on("submit", handleClick)

async function handleClick (evt) {
  evt.preventDefault();
  const searchText = $("#search-input");
  const gif = await getGif(searchText);
}

async function getGif(searchText) {
  const gifResponse = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q: searchText, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
  return gifResponse;
}

//make ajax post request
//need to await for response
//console the response.data

//console.log("Let's get this party started!");