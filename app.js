/*
This file "app.js" is used as an entry point to launch our website.
No comments or detailed explanations except for the few new commands
for more clarification about what's going on :-)
Please refer to my original repo "express-basics":
Link: https://github.com/anmarjarjees/express-basics
*/

// https://expressjs.com/en/starter/hello-world.html

/*
Important Note To Recap:
************************
> If you want to use the "import" statement [ES6 Modules], 
=> you have to remove "type": "module" from your package.json file.

> If you want to go with `require()` [CommonJS node native module],
=> you don't add "type": "module" to the package.json file.
*/

// Using ES6 Syntax (uncomment if using ES6 modules):
// import express from "express";

// Or Using CommonJS (Node.js) Syntax (default):
const express = require('express');

// Creating an instance of express named "app" by convention:
const app = express();
const port = 3000;

/*
Importing the "path" module:
In ES6, this would be:
import path from "path";

Since we're using CommonJS (Node.js), we use "require":
*/

const path = require('path');
/*
The "path" for which the middleware function is invoked.
The "path" can be:
- A string representing a path
- A path pattern
- A regular expression pattern to match paths
- An array of combinations of any of the above

This allows us to serve specific routes or static files based on the pattern.
*/


// Test the path module:
// console.log("\npath: ", path);

/*
We will also use __dirname to refer to the root directory of the application.

NOTE: 
"__dirname" comes with using `require()` in CommonJS.
If you're planning to use ES6 modules, 
you need to import it individually as it's not available by default in ES6.
*/

console.log("__dirname: ", __dirname);
/* 
Output Example:
__dirname:  C:\Repos\Express\express-node-website 
*/

/*
Finally to get a JSON data,
we need to import the json file which is "colors.json"
Since we're using CommonJS, we use `require` to import the JSON data.
If using ES6, you could import it like:
import data from './data/colors.json' assert { type: 'json' };

Link: https://nodejs.org/api/esm.html#import-assertions
*/

// Importing JSON data from a file:
const data = require('./data/colors.json');

/*
Using Express Static folder:
Express provides a middleware function `express.static()` to serve static files like HTML, CSS, and images.

https://expressjs.com/en/starter/static-files.html

This function allows us to serve files from a folder to be accessible via a URL.

express.static(): 
This is a built-in middleware function in Express. 
It serves static files and is based on serve-static.

specifying the static folder "public"
*/


// First Example (Basic static folder usage):
// ******************************************
// app.use(express.static('public'));

// Second Example (Better practice using absolute paths with path.join):
// *********************************************************************
/*
Instead of hardcoding the path like `express.static(__dirname + '/public')`, 
we use "path.join()" to ensure cross-platform compatibility.
Using path.join ensures that we correctly resolve paths regardless of the operating system.

So we can run our application for example from the direct parent folder also:
>  node express-node-website/app

If we don't add the "path", we can run the app by running the command only within the same folder
*/

// it will work with this simple solution:
// app.use(express.static(__dirname + '/public'));

// but it's much better and more professional to use path.join():
// We specify the `/site` path in the URL to serve the static files. 
// URL: http://localhost:3000/site
app.use('/site', express.static(path.join(__dirname, 'public')));
/*
From Express Documentation:
The path provided to "express.static" should be relative to the directory from which the node process is launched.
Using "path.join()"" ensures that the path is correctly resolved even if the app is run from a different directory.
*/

/*
Handling 404 Responses:
We can customize how errors like 404 (Page Not Found) are handled by adding an "error-handling" middleware function.
This will respond when a non-existent route is accessed.
Link: https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses
*/
app.use((err, req, res, next) => {
    res.status(404).send("<h1>Error 404, Cannot find your request!<h1>");

    // We can log the error stack for debugging purposes
    console.error(err.stack);

    // Handle additional error scenarios, like 500 Internal Server Errors
    res.status(500).send('Something broke!');
})

/*
The basic ".get()"" method handles HTTP GET requests (default example from Express).
It is used just to serve content when we visit the root (base) URL.
URL: http://localhost:3000/
*/
app.get('/', (req, res) => {
    res.send('Hello World!')
})

/*
Topic #2: Quick demo on sending/fetching data from the backend (server-side)
using a GET method at the "/api/colors" endpoint.

This route will send JSON data as a response when it's accessed.
URL: http://localhost:3000/api/colors
*/
// URL: http://localhost:3000/api/colors
app.get('/api/colors', (req, res) => {
    /*
    Here, we're sending the data as JSON. 
    This is a simple example, but you can replace the static data with dynamic content.
    */

    // Uncomment this section if you want to define the colors manually
    /*
    const colors = [
        {
            "color": "red",
            "value": "#f00"
        },
        {
            "color": "green",
            "value": "#0f0"
        },
        {
            "color": "blue",
            "value": "#00f"
        }
    ];

    res.json(colors);
    console.log("Colors: \n", colors);
    */

    // testing:
    // console.log("request received and data: \n", data);

    // using the response with the method ".json()" to get the JSON data 
    // and send a JSON response to the route handler:
    res.json(data);
});

// to run the app:
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});