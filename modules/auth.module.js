// JWT Library
const jwt = require('jsonwebtoken');
// Data Validator
const validate = require('hyvalidator').validate;
const Strings = require('hyvalidator').Strings;
// Crypting Library
const bcrypt = require('bcryptjs');
// Secret from config file
const secrets = require('../config/secrets.json');
//User Collection
const User = require('../models/user.model.js');

module.exports.login = (email, password) => {
    return new Promise((resolve, reject) => {
        User.find({ email: email }).then((data) => {
            if (data !== null && data.length && data.length > 0) {
                // if (data.valid) { // turn back on for email validation
                //probable in their api anyways
                if (bcrypt.compareSync(password, data[0].password)) {
                    let payload = {
                        email: data[0].email,
                        password: data[0].password,
                        role: data[0].role
                    }
                    let token = jwt.sign(payload, secrets.jwt);
                    let user = data[0];
                    resolve({ user, token });
                } else {
                    reject("Wrong Password");
                }
                // } else {
                //     reject("This Account has not been activated");
                // }
            } else {
                reject("User Not Found");
            }
        }).catch(err => {
            reject(err);
        });
    });
}

module.exports.register = (user) => {
    return new Promise((resolve, reject) => {
        var rules = new Strings.Rule;
        rules.setIsEmail();
        var errors = validate(user.email, rules);
        if (errors) {
            reject(errors);
        }
        else {
            User.find({ email: user.email }).then((data) => {
                if (data && data.length && data.length > 0) {
                    reject("This Email Is Already Taken");
                } else {
                    let salt = bcrypt.genSaltSync(10);
                    let hash = bcrypt.hashSync(user.password, salt);
                    user.password = hash;
                    user.salt = salt;
                    User.insert(user).then((data) => {
                        resolve(user);
                    }).catch(err => {
                        reject(err);
                    });
                }
            }).catch(err => {
                reject(err);
            });
        }
    });
}

module.exports.getInfoFromToken = (token) => {
    return new Promise((resolve, reject) => {
        let decoded = jwt.decode(token);
        User.find({ email: decoded.email }).then((data) => {
            if (data[0]) {
                resolve(data[0]);
            } else {
                resolve({});
            }
        }).catch((err) => {
            reject(err);
        });
    });
}