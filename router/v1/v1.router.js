// An Express router
let express = require('express');
let router = express.Router();

router.use("/v1",require('./api.public.js'));
router.use('/v1',require('./api.secure'));

module.exports = router;