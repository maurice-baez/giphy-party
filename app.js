"use strict";

/*Create an async function creating an api request to the giphy server

grab the data thats returned, input into another function to append to the DOM

the info we'll grab from the server is the url of the image

We'll take the image and pass that to another function to append it to the DOM.

We need to add event listeners to our search and remove buttons.

We'll need a function to remove all images.*/

const $gifArea = $(".display");
const $searchButton = $("#search");
const $deleteButton = $("#remove");
const key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const apiBaseUrl = "http://api.giphy.com/v1/gifs/search";

/** Add gif by appending server result to DOM */
function appendGifToDom(url) {
  console.log("url =", url);

  let $img = $("<img>");

  $img.attr("src", url);

  $gifArea.append($img);
}


/**Gather information from search */
async function getGif() {

  let searchTerm = $("#gif").val();

  let response = await axios.get(apiBaseUrl, { params: { q: searchTerm, api_key: key } });

  console.log("resp=", response);
  //Get random number between 0-50

  appendGifToDom(
    response.data.data[randomNumber()].images.original.url);
}

/**Get random number between 0-50 */
function randomNumber(){
  return Math.floor(Math.random() * 50);
}

/** Remove images from DOM */
function removeImages(){
  console.log("function ran");
  $gifArea.empty();
}

$searchButton
  .on("click", getGif);

$deleteButton
  .on("click", removeImages);