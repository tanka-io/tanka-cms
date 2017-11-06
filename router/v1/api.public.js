let express = require('express');
let router = express.Router();


router.use('/auth', require('./public/auth.router.js'));
router.use('/pages', require('./public/pages.router.js'));
router.use('/sections', require('./public/sections.router.js'));
router.use('/config', require('./public/config.router.js'));
router.use('/schemas', require('./public/schemas.router.js'));
router.use('/datas', require('./public/datas.router.js'));


module.exports = router;