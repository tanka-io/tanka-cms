// An Express router
const router = require('express').Router();
const static = require('express').static;
// A Library for standarisazion of JSON responses
const response = require('dark-snow-response');

router.use("/",static(__dirname+"../../../../upload"))

router.post('/', function (req, res) {
    if (!req.files)
        return response.badRequest(res, 'No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let file = req.files[""];
    let path = "/upload/" + file.name;
    // Use the mv() method to place the file somewhere on your server
    file.mv("." + path, function (err) {
        if (err) {
            console.log(err)
            return response.error(res);
        }
        response.accepted(res, {
            path: "/api/v1" + path
        });
    });
});

module.exports = router;
