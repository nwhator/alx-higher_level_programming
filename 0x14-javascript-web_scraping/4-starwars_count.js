#!/usr/bin/node
const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Character ID for "Wedge Antilles"
const wedgeAntillesId = 18;

// Make a GET request to the specified API endpoint
request.get(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const filmsData = JSON.parse(body).results;
    // Filter films where "Wedge Antilles" is present
    const filmsWithWedge = filmsData.filter((film) =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeAntillesId}/`)
    );
    // Print the count of films
    console.log(filmsWithWedge.length);
  } else {
    console.error(`Error: ${error}`);
  }
});
