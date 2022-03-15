"use strict"

/*Create an async function creating an api request to the giphy server

grab the data thats returned, input into another function to append to the DOM

the info we'll grab from the server is the url of the image

We'll take the image and pass that to another function to append it to the DOM.

We need to add event listeners to our search and remove buttons.

We'll need a function to remove all images.*/


async function getGif() {
  let searchTerm = $("#gif").val();
  let key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"

  let response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q: searchTerm, api_key:key }});

  console.log("resp=", response);
  
}

const $searchButton = $("#search");
const $deleteButton = $("#remove");

$searchButton
.on("click", getGif);



