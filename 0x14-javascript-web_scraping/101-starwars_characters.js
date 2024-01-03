#!/usr/bin/node

const request = require('request');

// Get the Movie ID from the command line argument
const movieID = process.argv[2];

// URL for the Star Wars API
const apiUrl = 'https://swapi-api.hbtn.io/api/films/';

// Make a GET request to the specified API endpoint for movie details
request.get(apiUrl + movieID, function (error, response, body) {
  if (error) {
    console.error(error);
  }

  // Parse the JSON response for movie details
  const movieData = JSON.parse(body);
  const characterUrls = movieData.characters;

  // Fetch and print each character name in order
  fetchAndPrintCharacters(characterUrls);
});

// Function to fetch and print characters in order
function fetchAndPrintCharacters (urls) {
  urls.forEach((characterUrl) => {
    request.get(characterUrl, function (error, response, characterBody) {
      if (error) {
        console.error(error);
      }

      // Parse the JSON response for each character
      const characterData = JSON.parse(characterBody);
      console.log(characterData.name);
    });
  });
}
