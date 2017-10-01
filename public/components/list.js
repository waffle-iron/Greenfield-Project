angular.module('myapp',[])
.component('list',{
  
  bindings:{
  	movies:  '<',
  	onClick: '<'

  },
  templateUrl: 'public/templets/list.html'

})