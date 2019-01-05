const monk = require('monk');
const db = monk('localhost/kevin');

module.exports = db;
