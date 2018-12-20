const monk = require('monk');
const db = monk('104.248.237.254/auth-for-noobs');

module.exports = db;
