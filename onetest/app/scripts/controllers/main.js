'use strict';
angular.module('onetestApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    //$scope.tareas = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    var tareasEnAlmacen = localStorageService.get('tareas');
    $scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];
    $scope.$watch('tareas', function (){
        localStorageService.add('tareas', $scope.tareas.join('\n'));
    }, true);    
    $scope.addTarea = function () {
    	$scope.tareas.push($scope.tarea);
    	$scope.tarea= '';
    };
    $scope.eliminarTarea = function (index) {
    	$scope.tareas.splice(index, 1);
    };
  });
