#!/usr/bin/node
const request = require('request');

// Get the Movie ID from the command line argument
const movieID = process.argv[2];

// URL for the Star Wars API
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

// Make a GET request to the specified API endpoint
request(apiUrl, (error, response, body) => {
  if (!error) {
    const movieData = JSON.parse(body);
    const characters = movieData.characters;

    // Print each character name
    characters.forEach((characterUrl) => {
      request.get(characterUrl, (err, res, charBody) => {
        if (!err && res.statusCode === 200) {
          const characterData = JSON.parse(charBody);
          console.log(characterData.name);
        } else {
          console.error(`Error: ${err}`);
        }
      });
    });
  } else {
    console.error(`Error: ${error}`);
  }
});
