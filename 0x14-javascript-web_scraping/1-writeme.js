#!/usr/bin/node
const fs = require('fs');

// Get file path and string to write from command line
const filePath = process.argv[2];
const content = process.argv[3];

// Write string to file in utf-8 encoding
fs.writeFile(filePath, content, error => {
  if (error) console.log(error);
});
