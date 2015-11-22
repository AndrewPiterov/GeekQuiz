var path= require("path");
var rootPath = path.normalize(__dirname+"/../../");

module.exports = {

    development:{
        db:'mongodb://localhost/geekquiz',
        rootPath:rootPath,
        port: process.env.PORT || 3030
    },

    production:{
        db:'mongodb://geek:geekquiz@ds053764.mongolab.com:53764/geekquiz',
        rootPaath: rootPath,
        port: process.env.PORT || 80
    }
};