# express-node-website
Quick demonstration about using Node.JS with Express to launch a simple static website. For more deep details about Express.JS, please refer to my repo ["Express Basics"](https://github.com/anmarjarjees/express-basics).

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



# NOTE:
Testing your website you might see this page with these contents:
 - **localhost** refused to connect.

Try:
 - Checking the connection
 - Checking the proxy and the firewall
ERR_CONNECTION_REFUSED

**Chrome Browser for example will suggest the following:**
Check your Internet connection
Check any cables and reboot any routers, modems, or other network devices you may be using.

**Allow Chrome to access the network in your firewall or antivirus settings.**
If it is already listed as a program allowed to access the network, try removing it from the list and adding it again.

**If you use a proxy server…**
Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Chrome menu > Settings > Show advanced settings… > Change proxy settings… > LAN Settings and deselect "Use a proxy server for your LAN".

**So you can change your Anti-Virus settings by following the instructions from Google, or just install and use "nodemon" as we did before.**

You can watch this video ["How to Fix Localhost Refused to Connect By Hostinger Academy"](https://youtu.be/fzTq0e-tHvo?si=i1K9n3jZ59jJR3HP)

But my personal solution as I had the same problem in running one of my application is simply by:
- Add the URL as a comment to your JavaScript application that you want to run. In my case (for this repo) as shown in this code snippet from "app.js":
```
// URL: http://localhost:3000/site
app.use('/site', express.static(path.join(__dirname, 'public')));
```
- Then run your server by:

> node .

OR if you installed "nodemon" and changed the JSON file:

> npm start

OR:

> npm run dev

- Just click the URL in the comment inside your .js file and that's it :-)


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
