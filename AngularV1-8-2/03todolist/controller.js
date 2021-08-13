angular
  .module("ToDoList", ["LocalStorageModule"])
  .controller("ToDoController", function ($scope, localStorageService) {
    $scope.todo=[];
    /*
    {
      actividad:'Terminar curso',
      fecha:'13/08/2021
    }
    */
   $scope.addActv=function(){
    $scope.todo.push($scope.newActv);
    $scope.newActv={};
   }
   
  });
