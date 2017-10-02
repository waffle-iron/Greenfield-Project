angular.module('myapp')
.component('entry',{
	controller:function(){
		this.favorite=function(id,title,name,date,popularity,overview,vote_count,vote_average,poster_path){
			//prepare object to send it to node server
			var obj={id:id,title:title,name:name,date:date,popularity:popularity,overview:overview,vote_count:vote_count,vote_average:vote_average,poster_path:poster_path}
			//make ajax request to server
			 $.ajax({
              url: "http://127.0.0.1:8080/add",
              type: "POST",
              data: obj,
              dataType: "html"
             });
			}
	},
    bindings:{
    	movie:'<'
    },
	templateUrl:'public/templates/entry.html'
});