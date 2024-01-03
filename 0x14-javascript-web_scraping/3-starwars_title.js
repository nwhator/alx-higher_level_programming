#!/usr/bin/node
const request = require('request');

// Get the movie ID from the command line argument
const movieID = process.argv[2];

// URL for the Star Wars API
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

// Make a GET request to the specified API endpoint
request.get(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const movieData = JSON.parse(body);
    // Print the title of the movie
    console.log(movieData.title);
  } else {
    console.error(`Error: ${error}`);
  }
});
