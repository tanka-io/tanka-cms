//creer un modéle cnforme a une collection DB
const Model = require("mongo-leaf").Model
module.exports = new Model("Datas", {}, { "collection": "new_datas" })