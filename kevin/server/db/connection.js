const monk = require('monk');
const db = monk('localhost/auth-for-noobs');
MONGO_URL=mongodb://iwall:testpw@localhost:27017/admin;
module.exports = db;
