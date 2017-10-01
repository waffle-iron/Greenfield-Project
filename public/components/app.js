angular.module('myapp',[])
.component('app',{
	controller:function(){   
		this.movie=[];
		this.id=undefined;
		//change searched movie
		var x=this;
		this.change=function(){
			//convert the name to id
			var text=this.input.val.value
			text=text.toLowerCase();
			for (var i=0;i<window.convertor.length;i++){
				titel=window.convertor[i].original_title.toLowerCase()
				if(text==titel){
					this.id=window.convertor[i].id;
					break;
				}
			}
			console.log(text)
			 $.ajax({
  		 	  async:false,
              url: "https://api.themoviedb.org/3/movie/"+this.id+"?api_key=5d2afcf0b3a09621c2e2a3961a8a7024&language=en-US",
              cache: false,
              dataType: 'json',
              success: function(data){
    			console.log(data)
    			x.movie[0]=data
            }
            })
			 
		}
	},	
	templateUrl:'public/templates/app.html'
});