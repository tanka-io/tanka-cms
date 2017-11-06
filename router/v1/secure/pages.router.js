const response = require('dark-snow-response');
const Schema = require('../../../models/page.model.js');
const router = require('express').Router();

router.post('/', (req, res) => {
    Schema.insert(req.body).then(() => {
        response.created(res);
    }).catch(err => {
        console.log(err)
        response.error(res);
    });
});

router.put('/:id', (req, res) => {
    delete req.body._id;
    Schema.updateById(req.params.id, req.body).then(() => {
        response.created(res);
    }).catch(err => {
        console.log(err)
        response.error(res);
    });
});


router.delete('/:id', (req, res) => {
    Schema.removeById(req.params.id).then(() => {
        response.created(res);
    }).catch(err => {
        console.log(err)
        response.error(res);
    });
});

module.exports = router;