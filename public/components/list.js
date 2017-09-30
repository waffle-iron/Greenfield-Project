angular.module('myapp',[])
.component('list',{
  
  bindings:{
  	movies:  '<',
  	onClick: '<'

  },
  templateUrl: 'puplic/templets/list.html'

})