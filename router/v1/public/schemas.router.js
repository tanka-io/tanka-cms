const response = require('dark-snow-response');
const Schema = require('../../../models/schema.model.js');
const router = require('express').Router();
const parseJson = require('../../../modules/utilities.module.js').parseJson;
const fixedEncodeURIComponent = require('../../../modules/utilities.module.js').fixedEncodeURIComponent;


_optionsValidator = (options) => {
    if (!options.limit || (options.limit && (options.limit > 25 || options.limit < 1))) {
        options.limit = 25;
    }

    if (!options.skip) {
        options.skip = 0;
    }
    return options;
}

router.get('/', (req, res) => {
    Schema.find().then((data) => {
        response.json(res, data);
    }).catch(err => {
        console.log(err)
        response.error(res);
    });
});

router.get('/:id', (req, res) => {
    Schema.findById(req.params.id).then((data) => {
        response.json(res, data);
    }).catch(err => {
        console.log(err)
        response.error(res);
    });
});

router.get('/query/:query', (req, res) => {
    let q = fixedEncodeURIComponent(req.params.query);
    parseJson(q).then(q => {
        Schema.find(q).then((data) => {
            response.json(res, data);
        }).catch(err => {
            console.log(err)
            response.error(res);
        });
    }).catch(err => {
        console.log(err)
        response.error(res);
    });
});


router.post('/', (req, res) => {
    Schema.insert(req.body).then((schema) => {
        response.created(res,schema);
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
        console.log(err);        
        response.error(res);
    });
});


module.exports = router;