let express = require('express');
let router = express.Router();

router.use(require('./middlewares/jwt.middleware.js'));
router.use('/pages', require('./secure/pages.router.js'));

module.exports = router;