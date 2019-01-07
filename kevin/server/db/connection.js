var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://auth-for-noobs:1234@localhost:27017/auth-for-noobs');


module.exports = db;
