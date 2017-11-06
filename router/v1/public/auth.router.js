// An Express router
const router = require('express').Router();
// A Library for standarisazion of JSON responses
const response = require('dark-snow-response');

const login = require('../../../modules/auth.module.js').login;
const register = require('../../../modules/auth.module.js').register;
const getInfoFromToken = require('../../../modules/auth.module.js').getInfoFromToken;

router.post('/login', (req, res) => {
    login(req.body.email, req.body.password).then((data) => {
        response.json(res, data);
    }).catch((err) => {
        console.log(err);
        response.badRequest(res, err);

    });
});

router.post('/register', (req, res) => {

    let pass = req.body.password;
    register(req.body).then((data) => {
        response.json(res, "Registration Completed");
    }).catch((err) => {
        response.badRequest(res, err);
    });
});

router.get('/info', (req, res) => {
    if (req.headers.authorization) {
        let header = req.headers.authorization;
        let arr = header.split(' ');
        if (arr[0] !== 'Bearer') {
            response.badRequest(res, "Not a Valid Request");
        }
        let token = arr[1];
        if (token) {
            getInfoFromToken(token).then((user) => {
                response.json(res, user);
            }).catch((err) => {
                console.log(err);
                response.badRequest(res);
            });
        } else {
            response.badRequest(res, "Please provide a token");
        }
    }
    else {
        response.badRequest(res, "Please provide a token");
    }
});

router.get('/refresh', (req, res) => {
    if (req.headers.authorization) {
        let header = req.headers.authorization;
        let arr = header.split(' ');
        if (arr[0] !== 'Bearer') {
            response.badRequest(res, "Not a Valid Request");
        }
        let token = arr[1];
        if (token) {
            response.json(res, token);
        } else {
            response.badRequest(res, "Please provide a token");
        }
    }
    else {
        response.badRequest(res, "Please provide a token");
    }
});


module.exports = router;
