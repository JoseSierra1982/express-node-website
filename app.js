/*
This file "app.js" is used as an entry point to launch our website
No comments or detailed explications except for the few new commands
for more clarification about what's going on :-)
please refer to my original repo "express-basics":
Link: https://github.com/anmarjarjees/express-basics
*/
// https://expressjs.com/en/starter/hello-world.html

/*
Important Note To Recap:
************************
> if you want to use "import" statement [ES6 Modules] 
=> you have to remove this from the JSON file: "type": "module"

> if you want to go with require() [CommonJS node native module] 
=> you don't add "type": "module" to the JSON file
*/

// Using ES6 Syntax:
// import express from "express";

// Or Using CommonJS (node) Syntax (default):
const express = require('express');

// Creating an instance of express named "app" by convention:
const app = express();
const port = 3000;

/*
Importing the "path" module:
import path from "path"; 

But since we are using CommonJS native, 
we will use require:
*/
const path = require('path');
/*
The "path" for which the middleware function is invoked; can be any of:
A string representing a path.
A path pattern.
A regular expression pattern to match paths.
An array of combinations of any of the above.
*/
// test:
// console.log("\npath: ", path);

/*
We will also use __dirname to refer to the root directory

NOTE:
"__dirname" comes with using require() of CommonJS
If yor are planning to use ES6 modules, 
you need to import it individually
*/

console.log("__dirname: ", __dirname);
/* 
Output Example:
__dirname:  C:\Repos\Express\express-node-website 
*/

/*
Finally to get a JSON data,
we need to import the colors.json
*/
// importing the json file to our index1.js:
// I have added { type: 'json' }
// Link: https://nodejs.org/api/esm.html#import-assertions
// import data from './data/colors.json' assert { type: 'json' };
const data = require('./data/colors.json');

// Using Express Static folder:
// https://expressjs.com/en/starter/static-files.html
/*
call .use() to serve static contents: html, images, css, etc...

express.static(): 
This is a built-in middleware function in Express. 
It serves static files and is based on serve-static.

specifying the static folder "public"
*/
// First:
// app.use(express.static('public'));

// Second:
/*
It's better to specify the path for the public folder based on docs
which to make the "public" folder relative to the working directory
of our application and NOT relative to the app.js file

So we can run our application for example from the direct parent folder also:
>  node express-node-website/app

If we don't add the "path", we can run the app by running the command only within the same folder
*/

// it will work with this simple solution:
// app.use(express.static(__dirname + '/public'));

// but it's much better and more professional to use path.join():
/*
Notice that we will have '/static' as the first parameter from docs,
which means we have to write this address in the URL to refer to our website:
URL: http://localhost:3000/static

Yes, we can rename the argument "static" to be website, site or any other name:
URL: http://localhost:3000/site
*/

// URL: http://localhost:3000/site
app.use('/site', express.static(path.join(__dirname, 'public')));
/*
From Express.JS:
 the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
*/

/*
How do to handle 404 responses?
Link: https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses
*/
app.use((err, req, res, next) => {
    res.status(404).send("<h1>Error 404, Cannot find your request!<h1>");
    // we can output the err stack
    console.error(err.stack)
    // we can include other http status errors:
    res.status(500).send('Something broke!')
})

// The default basic .get() method:
// URL: http://localhost:3000/

app.get('/', (req, res) => {
    res.send('Hello World!')
})

/*
Finally: Topic#2 
Quick demo about send/fetch data from the backend (server-side)
using get method() the end point: "/api/colors"
*/
// URL: http://localhost:3000/api/colors
app.get('/api/colors', (req, res) => {
    /*
    Notice that we can also create the JSON content using a local variable,
    Then send it:
    */

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

    // using the response with the method ".json()"" to get the JSON data 
    // and send a JSON response to the route handler:
    // testing:
    // console.log("request received and data: \n", data);

    res.json(data);
})

// to run the app:
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});