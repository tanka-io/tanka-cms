function tanka(options) {
    if (options && options.mongodbUrl && options.port) {
        const express = require("express");
        const app = express();
        const bodyParser = require('body-parser');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        const response = require("dark-snow-response");
        response.setProvider("Tanka CMS");


        const fileUpload = require('express-fileupload');
        app.use(fileUpload());

        

        //connexion DB
        require("dark-snow-model").connect(options.mongodbUrl)


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

        // Enabling static apps
        app.use("/", express.static(__dirname + '/public/client'));
        app.use("/admin", express.static(__dirname + '/public/admin'));
        app.listen(options.port);
        const chalk = require('chalk');
        const figlet = require('figlet');
        console.log(
            chalk.white(
                figlet.textSync('Tanka CMS', { horizontalLayout: 'full' })
            ));
        console.log(chalk.blue("App is running port " + options.port));
    } else if (!options) {
        console.log("You should provide an options object");
    } else if (!options.port) {
        console.log("You should provide a port for the application 'options.port'");
    } else if (!options.mongodbUrl) {
        console.log("You should provide a mongodb Url for the application 'options.mongodbUrl'");
    }
}

module.exports = tanka;