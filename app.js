"use strict";

const $form = $("#form")
const $gifArea = $(".display");
const $searchButton = $("#search");
const $deleteButton = $("#remove");
const key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const apiBaseUrl = "http://api.giphy.com/v1/gifs/search";


/** Add gif by appending server result to DOM */
function appendGifToDom(url) {
  console.log("url =", url);

  const $img = $("<img>");

  $img
  .attr("src", url)
  .addClass("img");

  $gifArea.append($img);
}


/**Gather information from search */
async function getGif() {

  const searchTerm = $("#gif").val();

  const response = await axios.get(apiBaseUrl, { params: { q: searchTerm, api_key: key } });

  //Get random number between 0-50
  const gif = response.data.data[randomNumber(response.data.data.length -1)].images.original.url;

  appendGifToDom(gif);
}


/**Get random number between 0-50 */
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}


/** Remove images from DOM */
function removeImages() {
  $gifArea.empty();
  $form.trigger("reset");
}


$searchButton
  .on("click", getGif);

$deleteButton
  .on("click", removeImages);