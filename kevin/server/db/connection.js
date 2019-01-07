var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://auth-for-noobs:1234@localhost:27017/auth-for-noobs');

var app = express();

// Make our db accessible to our router
app.use(function(req,res,next){
        req.db = db;
        next();
});

module.exports = db;
