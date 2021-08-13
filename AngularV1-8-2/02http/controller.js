angular
  .module("MyFirsApp", [])
  .controller("FirstController", function ($scope, $http) {
    $scope.posts = [];
    $http({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then(
      function (response) {
        $scope.posts = response.data;
        console.log(response);
      },
      function (error) {}
    );
    $scope.addPost = function () {
      $http({
        method: "Post",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
          title: $scope.title,
          body: $scope.body,
          userId: 1,
        },
      }).then(function (response, status, headers, config) {
        $scope.posts.push(response.data);

      }),
        function (error, status, headers, config) {
          console.log(error);
        };
    };
    /* La .success sintaxis era correcta hasta Angular v1.4.3.
  $http.get("https://jsonplaceholder.typicode.com/posts")
    .success(function(data){
      console.log(data)
    })
    .error(function(err){

    });
    
    */
  });
