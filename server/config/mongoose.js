var mongoose = require("mongoose");

module.exports = function(config){

    mongoose.connect(config.db);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function () {
        console.log('geekquiz db opened')
    });

    var userScheme= mongoose.Schema({
        lastName: String,
        firstName: String,
        userName: String
    });

    var User = mongoose.model("User", userScheme);

    User.find({}).exec(function(err, collection){
        if(collection.length===0){
            User.create({firstName:'Andrey', lastName:'P', userName:'andreyp'});
        }
    });
};

