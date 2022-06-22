var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    username : String,
    pasword : String,
    email:String

});

module.exports = mongoose.model('user', user);
