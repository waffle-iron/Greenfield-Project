angular.module('myapp')
.component('list',{
  bindings:{
  	movie:  '<'
  },
  templateUrl: 'public/templates/list.html'

})