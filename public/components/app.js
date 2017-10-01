angular.module('myapp',[])
.component('app',{
	controller:function(){
		this.movie={};
		this.id=undefined;
		//change searched movie
		var x=this;
		this.change=function(){
			//convert the name to id
			var text=this.input.val.value
			for (var i=0;i<window.converter.length;i++){
				if(text==window.converter[i].original_title){
					this.id=window.converter[i].id;
				}
			}
			//console.log(window.converter)
			console.log(text)
			 $.ajax({
  		 	  async:false,
              url: "https://api.themoviedb.org/3/movie/"+this.id+"?api_key=5d2afcf0b3a09621c2e2a3961a8a7024&language=en-US",
              cache: false,
              dataType: 'json',
              success: function(data){
    			console.log(data)
    			x.movie=data
            }
            })
		}
	},	
	templateUrl:'public/templates/app.html'
});