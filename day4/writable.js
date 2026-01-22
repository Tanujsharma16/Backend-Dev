const fs = require('fs');
const path = require('path');

// const{CLIENT_RENEG_LIMIT} = require('tls');

const inputFilePath = path.join(__dirname,"input.txt");

const outputFilePath = path.join(__dirname,"output.txt");

const inputStream  = fs.createReadStream(inputFilePath,'utf-8');

const writeStream = fs.createWriteStream(outputFilePath);

inputStream.on("data", (chunk) =>{
    console.log('Data is reading in chunk',chunk);
})

// inputStream.pipe(writeStream);