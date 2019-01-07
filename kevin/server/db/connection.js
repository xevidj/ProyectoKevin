var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://mongoAdmin:changeMe@localhost:27017/auth-for-noobs');


module.exports = db;
