const mongo = require('mongodb');
const monk = require('monk');
const db = monk('mongodb://auth-for-noobs:1234@localhost:27017/auth-for-noobs');


module.exports = db;
