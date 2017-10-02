var express=require('express');
var db = require("./Database/config.js");
var schema1= require("./Database/Model/Movie.js");
var schema2= require("./Database/Model/User.js");
var app=express();

//trying the database

var movie1 = new schema1 ({ id:13560 ,title:"Max" , release_date:"2002-09-10", popularity: '3.938836', 
overview:
"In 1918, a young, disillusioned Adolph Hitler strikes up a friendship with a Jewish art dealer while weighing a life of passion for art vs. talent at politics",
vote_average: '6.2' , vote_count: '39' })//poster_path: "/fzl48iRWkalx6c84lokVBoTQJjS.jpg",

var User1 = new schema2 ({id:1 , username: "samya" , password: "1234"})

movie1.save(function(error, result){
   if(error){
  	throw error;
  }
 else{
  	console.log("record added");
     }
 });
User1.save(function(error, result){
   if(error){
  	throw error;
  }
 else{
  	console.log("record added");
     }
 });

///////////////////////////

app.use(express.static(__dirname));
var port = process.env.PORT||8080;
app.listen(port,function(err){
	console.log('connected');


})

