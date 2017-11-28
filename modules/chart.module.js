const XLSX = require('xlsx');
const fs = require('fs');

async function loadWorkbook(path) {
    return XLSX.readFile(path, { type: "utf-8" });
}
async function cleanHeaders(sheet) {
    let lastCol = '';
    let chars = genArrayExcel();
    chars.some(c => {
        if (sheet[c + "1"]) {
            lastCol = sheet[c + "1"];
        } else {
            sheet[c + "1"] = lastCol
        }
    });
    return sheet;
}
async function sheetToJson(sheet) {
    sheet = await cleanHeaders(sheet);
    let lines = XLSX.utils.sheet_to_json(sheet, { raw: true ,defval:""});
    return lines;
}


function range(start, stop) {
    var result = [];
    for (var idx = start.charCodeAt(0), end = stop.charCodeAt(0); idx <= end; ++idx) {
        result.push(String.fromCharCode(idx));
    }
    return result;
};
function genArrayExcel() {
    let chars = range('A', 'Z')
    chars.filter(e => {
        return e.length === 1
    }).forEach(e => {
        chars.filter(e => {
            return e.length === 1
        }).forEach(x => {
            chars.push(e + x);
        });
    });
    return chars
}



module.exports.loadWorkbook = loadWorkbook;
module.exports.sheetToJson = sheetToJson;
