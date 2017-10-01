var express=require('express');
var db = require("./Database/config.js");
var schema= require("./Database/Model/Movie.js");
var app=express();

//trying the database
var record= new schema({image: "image",
id:1,
title: "movie",
overview:"movie"});

record.save(function(error, result){
if(error){
	throw error;
}
else{
	console.log("record added");
}
});


app.use(express.static(__dirname));

app.listen(8000,function(err){
	console.log('connected')
})

