const mongo = require('mongodb');
const monk = require('monk');
const db = monk('mongodb://mongoAdmin:changeMe@localhost:27017/auth-for-noobs');


module.exports = db;
