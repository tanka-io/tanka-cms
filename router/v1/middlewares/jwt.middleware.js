var jwt = require('jsonwebtoken');
var User = require("../../../models/user.model.js");
const response = require('dark-snow-response');
const getFromToken = require('../../../modules/auth.module').getInfoFromToken;
module.exports = function (req, res, next) {

    // When performing a cross domain request, you will recieve
    // a preflighted request first. This is to check if our the app
    // is safe.

    // We skip the token outh for [OPTIONS] requests.
    //if(req.method == 'OPTIONS') next();
    let token;
    let head;
    if (req.headers['authorization']) {

        head = req.headers['authorization'].split(' ');
        token = head[1];
    }
    if ((token) && head[0] === "Bearer") {

        getFromToken(token).then((user) => {
         if(user._id){
             req._user = user;
             next()
         } else {
             response.badRequest(res, "Please provide a valid token");
         }
        }).catch(err => {
            response.badRequest(res, "Please provide a valid token");
        });

    } else {
        response.badRequest(res, "Please provide a valid token");
    }
};
