const express = require("express")
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
const response = require("dark-snow-response")
response.setProvider("Heiyuki")
//connexion DB
require("dark-snow-model").connect("mongodb://127.0.0.1:27017/newcms")


// Enabling Cros origin resource sharing
app.all('/*', function (req, res, next) {
    // CORS headers
    res.header("X-Frame-Options", "ALLOW-FROM https://www.google.com"); // restrict it to the required domain
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,authorization,X-Frame-Options');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.use("/api", require('./router/v1/v1.router'));


app.listen(3000)
console.log("app is running port 3000")