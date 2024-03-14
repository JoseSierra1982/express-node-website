# Express Node Website:
Quick demonstration about two topics:

> **Topic#1:** Using Node.JS with Express to launch a simple static website. For more deep details about Express.JS, please refer to my repo ["Express Basics"](https://github.com/anmarjarjees/express-basics).

> **Topic#2:** Using API request to let the "Front-End" to get data from the "Back-End"

# Express Templating Engines:
We can use one of the view engines view/templating engines that are supported by Express.JS. The templating engines include:

- EJS
- Hbs
- Pug (Jade)
- Twig
- Vash

Notice that we can use "Express Generator" to let express install the required package with the default boilerplate to start our application. You can refer to my repo ["Express Application"](https://github.com/anmarjarjees/express-application) for more details.

The templating engine "hbs" for ["Handlebars"](https://handlebarsjs.com/) has a similar syntax to other JavaScript frameworks like Vue or Angular. You can refer to my repo ["Express Website with Hbs"](https://github.com/anmarjarjees/express-website-hbs) for more details about using 

# Quick Steps:
1. Initialize the "package.json" file:
```
npm init -y
```

2. Install Express:
```
npm i express
```

3. Creating a public folder to save a full website contents (all static files), and we need to make them available when we start the server. By convention and based on Express.JS docs, we can name it "public".
The folder "public" in this repo contains:
- HTML Pages
- Assets: images and video
- CSS
- JavaScript (if needed)

4. We can modify the default main JavaScript file in "package.json:
- from ["main": "index.js",] 
- to ["main": "app.js",] 

so we can simply run:
```
> node .
```

4. Using the template from Express.JS

5. We can still run the server after modifying the json package by:

> node .

OR if you installed "nodemon" and changed the JSON file, we can use:

> npm start

OR:

> npm run dev

In such case any change we save, the server will restart :-)

# Installing nodemon and JSON settings"
In this section, we will review the steps for installing nodemon and the changes we need to make in the "package.json" file. Instead of rerun the server after any change we save in our application, we can install ["nodemon"](https://www.npmjs.com/package/nodemon). Any change we save our sever will restart automatically.

We can install nodemon in two different ways:
- Install it as App dependency:
```
npm i nodemon
```

- You can also install nodemon as a *"development dependency"* (recommended) since it's only needed for development not for production:
```
npm install nodemon --save-dev
```
OR:
```
npm i nodemon --save-dev
```

Then we will have this change in the "package.json" file:
```
  "devDependencies": {
    "nodemon": "^3.0.3"
  }
```

Installing "nodemon" is not enough, as we need to add it to the "script" property of the "package.json" file.

The original "script" code:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

And after changing:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js",
  },
```

Now we can start our application by running this command:
```
> npm start
```

Or if we change the package.json file by adding "dev" property for development:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js",
    "dev": "nodemon"
  },
```
we can run this command:
```
> npm run dev
```

# References, Resources, and Credits:
- https://expressjs.com/en/starter/installing.html 
- https://handlebarsjs.com/
- https://github.com/anmarjarjees/express-basics
- https://github.com/anmarjarjees/express-application
- https://github.com/anmarjarjees/express-website-hbs 
- https://github.com/anmarjarjees/node.js-start
- https://github.com/anmarjarjees/ECMAScript6
- https://github.com/anmarjarjees/js-frameworks