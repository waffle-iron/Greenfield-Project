angular.module('myapp',[])
.component('entry',{
    bindings:{
      movie: '<',
      onClick:'<'
	},
	templateUrl: 'public/templets/entry.html'
});