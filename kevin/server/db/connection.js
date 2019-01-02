const monk = require('monk');
const db = monk('localhost/admin');

module.exports = db;
