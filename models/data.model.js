//creer un modéle cnforme a une collection DB
const Model = require("dark-snow-model").Model
module.exports = new Model("Datas", {}, { "collection": "new_datas" })