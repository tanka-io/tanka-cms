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
        require("mongo-leaf").connect(options.mongodbUrl)


        // Enabling Cros origin resource sharing
        app.all('/*', function (req, res, next) {
            // CORS headers
            res.header("X-Frame-Options", "ALLOW-FROM https://www.google.com https://www.youtube.com"); // restrict it to the required domain
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
        app.use("/admin", express.static('./public/admin'));
        app.use("/", express.static('./public/client'));
        // history mode handling for SPA
        const history = require('connect-history-api-fallback');
        app.use(history());
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
