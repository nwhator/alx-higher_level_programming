#!/usr/bin/node
const request = require('request');
const fs = require('fs');

// Get URL and file path from command line
const url = process.argv[2];
const filePath = process.argv[3];

// Make GET request to the URL
request(url).pipe(fs.createWriteStream(filePath));
