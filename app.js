"use strict";

//attach event listener to button
//listening for submit
//send post request
//append results to the DOM
$("#search-form").on("submit", handleClick)

function handleClick (evt) {
  evt.preventDefault();
  const searchText = $("#search-input");

  console.log(searchText);
}

//console.log("Let's get this party started!");