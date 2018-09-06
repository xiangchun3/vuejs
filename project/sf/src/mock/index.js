let search = require('./search/index');
let login = require('./login/index');
let index = require('./index/index');

let porxy = Object.assign({}, search, login, index);
module.exports = porxy;