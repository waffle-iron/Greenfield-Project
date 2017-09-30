angular.module('myapp',[])
.component('entry',{
    bindings:{
      movie: '<',
      onClick:'<'
	},
	templateUrl: 'puplic/templets/entry.html'
});