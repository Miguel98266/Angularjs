angular
  .module("MyFirsApp", [])
  .run(function ($rootScope) {
    $rootScope.nombre = "Miguel";
  })
  .controller("FirstController", function ($scope) {
    $scope.nombre = "CF";
    setTimeout(function () {
      $scope.apply(function () {
        $scope.nombre = "xD";
      });
    }, 1000);
  })
  .controller("ChildController", function ($scope) {});
