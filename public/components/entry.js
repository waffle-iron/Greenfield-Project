angular.module('myapp')
.component('entry',{
    bindings:{
    	movie:'<'
    },
	templateUrl:'public/templates/entry.html'
});