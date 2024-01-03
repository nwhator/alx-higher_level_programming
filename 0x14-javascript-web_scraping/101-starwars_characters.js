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
    return;
  }

  // Parse the JSON response for movie details
  const movieData = JSON.parse(body);
  const characterUrls = movieData.characters;

  // Iterate through each character URL
  for (const characterUrl of characterUrls) {
    // Make a GET request to fetch each character's details
    request.get(characterUrl, function (error, response, characterBody) {
      if (error) {
        console.error(error);
      } else {
        // Parse the JSON response for each character
        const characterData = JSON.parse(characterBody);
        console.log(characterData.name);
      }
    });
  }
});
