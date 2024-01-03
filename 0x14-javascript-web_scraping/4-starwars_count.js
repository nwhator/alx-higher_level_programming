#!/usr/bin/node
const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Make a GET request to the specified API endpoint
request(apiUrl, function (error, response, body) {
  if (!error) {
    // Parse the JSON response and extract movie results
    const results = JSON.parse(body).results;

    // Count movies where character "Wedge Antilles" is present
    const moviesWithWedge = results.reduce((count, movie) => {
      return movie.characters.find((character) => character.endsWith('/18/'))
        ? count + 1
        : count;
    }, 0);

    // Print the count of movies
    console.log(moviesWithWedge);
  }
});
