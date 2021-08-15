angular
  .module("MyFirsApp", [])
  .controller("FirstController", function ($scope, $http) {
    $scope.posts = [];
    $scope.loading=true;
    $http({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts  ",
    }).then(
      function (response) {
        $scope.posts = response.data;
        console.log(response);
        $scope.loading=false;
      },
      function (error) {
        $scope.loading=false;
      }
    );
  });
