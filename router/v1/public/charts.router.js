const router = require('express').Router();
const fs = require('fs');
const Chart = require('../../../modules/chart.module.js');
const response = require('dark-snow-response');
router.post('/', (req, res) => {
    Chart.loadWorkbook(__dirname+"/../../../upload/"+req.body.path.split('/')[req.body.path.split('/').length-1]).then(workbook=>{
        Chart.sheetToJson(workbook.Sheets[req.body.sheet]).then(j=>{
            response.json(res,j);
        })
    })
})

module.exports = router;