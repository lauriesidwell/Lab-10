	var app = angular.module('myModule', [ngRoute]);
		  app.controller('myController', function($scope){	

	      $scope.ToDoList = [
	        {task: 'water plants', day: 'Sunday, Thursday'},
	        {task: 'feed cats', day: 'Tuesday, Friday'},
	        {task: 'take out trash', day: 'Monday, Wednesday, Friday'},
	        {task: 'clean floor', day: 'Saturday, Tuesday'}]
	
	$scope,toDoList = ["cleaning", "shopping", "drive"];

	$scope.submit = function() {
		$scope.toDoList.push.$scope.newItem;
	}
	$scope.toDoList.push$scope.newItem;
	$scope.newItem = '';
	}
});
		

		function(addTask);
