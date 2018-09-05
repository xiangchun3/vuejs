let search = require('./search/index');
let login = require('./login/index');

let porxy = Object.assign({}, search, login);
module.exports = porxy;