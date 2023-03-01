"use strict";

//attach event listener to button
//listening for submit
//send post request
//append results to the DOM
$("#search-form").on("submit", handleClick)

async function handleClick (evt) {
  evt.preventDefault();
  const searchText = $("#search-input");
  const gifs = await getGif(searchText);

  const $gif = $(gifs.data.data[0]);
  // $("#gifs").append($gif).url();
  console.log($gif);
  console.log($gif.attr("url"));
  const gifUrl = $gif.attr("url");
  $("<img></img>").attr("src", gifUrl).css("width", "100px").css("height", "auto").append("#gifs");
  // grab a gif from gif.data.data[0]
}

async function getGif(searchText) {
  const gifResponse = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q: searchText, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
  return gifResponse;
}

//console.log("Let's get this party started!");