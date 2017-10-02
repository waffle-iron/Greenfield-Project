var express=require('express');
//var db = require("./Database/config.js");
//var schema= require("./Database/Model/Movie.js");
var app=express();

//trying the database

app.use(express.static(__dirname));
var port = process.env.PORT||3000;
app.listen(port,function(err){
	console.log('connected')
})

