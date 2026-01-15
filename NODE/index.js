const file=require('fs');
// const path=require('path');

// const http=require('http');

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('Response is closed');
// })
// server.listen(8000 , ()=>{
//     console.log('Server is running on port 8000');
// })
// const http = require("http");
// const server = http.createServer((req, res) => {
    
//     switch (req.url) {
//         case "/":
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end("<h1>Welcome to the Home Page</h1>");
//             break;
//         case "/about":
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end("<h1>About Us Page</h1>");
//             break;
//         case "/contact":
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end("<h1>Contact Us Page</h1>");
//             break;
//         default:
//             res.writeHead(404, { 'Content-Type': 'text/html' });
//             res.end("<h1>404 Page Not Found</h1>");
//             break;
//     }});
// server.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// });

const http = require("http");
const fs = require("fs");

const Server = http.createServer((req, res) => {
    const timestamp = new Date().toISOString();
    const log = `User requested at: ${timestamp} for URL: ${req.url}`;

    fs.appendFile("log.txt", log + "\n", () => {});

    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Welcome to home page</h1>");
            break;

        case "/about":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Welcome to about page</h1>");
            break;

        default:
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Page not found" }));
            break;
    }
});

Server.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});


// const fs = require('fs'); // File System module, inbuilt in Node.js

// const math = require('./math'); // Importing the add function from math.js


// console.log(math.add(5, 3)); // Using the imported add function
// console.log(math.remove(5, 10)); // Using the imported remove function
// console.log(math.areaOfCircle(4)); // Using the imported areaOfCircle function



// const fs = require('fs');
// fs.writeFileSync("test.txt","This is a test file"); //fs module -> used to work with files

// const file = fs.readFileSync('test.txt','utf-8');
// console.log(file);

// const asyncFile = fs.readFile("test.txt","utf-8");  it is a asynchronous function so it requires a callback function to handle the result
// so after adding the callback function problem
// const asyncFile = fs.readFile("test.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Error in the File",err);
//     }else{
//         console.log("succesfull",data);
//     }
// });
// asyncFile;

// fs.appendFile



// const path = require("path"); //path module -> used to work with file and directory paths

// //

// fs.writeFileSync("log.txt","This is log file\n");

// fs.appendFileSync("log.txt","User successfully logged in 23:14 AM");

// const readLog = fs.readFileSync("log.txt","utf-8");
// console.log(readLog);

// i want too make a function which read the log file and give the who the user logged in at what time
// function readLogFile(){
//     const logData = fs.readFileSync("log.txt","utf-8");
//     const logLines = logData.split("\n");
//     logLines.forEach((line)=>{
//         if(line.trim() !== ""){
//             console.log(line);
//         }
//     });
// }


// readLogFile();
// const fs = require('fs');

// const logger = require('./logger');

// logger.logActivity("User is logged in");
