#!/usr/bin/node
const fs = require('fs');

// Get file path from command line arguments
const filePath = process.argv[2];

// Read file content in utf-8 encoding
fs.readFile(filePath, 'utf8', (err, data) => console.log(err || data));
