angular.module('myapp',[])
.component('app',{
	controller:function(){
		this.movie={};
		//change searched movie
		var x=this;
		this.change=function(){
			console.log('clicked')
			 $.ajax({
  		 	  async:false,
              url: "https://api.themoviedb.org/3/movie/500?api_key=5d2afcf0b3a09621c2e2a3961a8a7024&language=en-US",
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