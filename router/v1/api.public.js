let express = require('express');
let router = express.Router();


router.use('/auth', require('./public/auth.router.js'));
router.use('/pages', require('./public/pages.router.js'));
router.use('/sections', require('./public/sections.router.js'));
router.use('/themes', require('./public/themes.router.js'));
router.use('/config', require('./public/config.router.js'));
router.use('/schemas', require('./public/schemas.router.js'));
router.use('/datas', require('./public/datas.router.js'));
router.use('/upload', require('./public/upload.router.js'));
router.use('/charts', require('./public/charts.router.js'));


module.exports = router;