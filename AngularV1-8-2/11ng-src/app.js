angular.module("CustomDirective",[])

.controller("AppContrl",function($scope,$http){
    $http({
        method: "GET",
        url: "https://api.github.com/users/urielhdz/repos",
      }).then(
        function (response) {
          $scope.repos = response.data;
          console.log(response);
        },
        function (error) {
            console.log(error)
        }
      );
});