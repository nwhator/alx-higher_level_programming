#!/usr/bin/node
const request = require('request');
const fs = require('fs');

// Get URL and file path from command line
const url = process.argv[2];
const filePath = process.argv[3];

// Make GET request to the URL
request.get(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    // Write body response to file in utf-8 encoding
    fs.writeFile(filePath, body, 'utf8', (err) => console.error(err));
  } else {
    console.error(`Error: ${error}`);
  }
});
