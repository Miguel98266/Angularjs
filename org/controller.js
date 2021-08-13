var app = angular.module("MyFirsApp", []);
app.controller("FirstController", function ($scope) {
  $scope.nombre = "Miguel";
  $scope.nuevoComentario={};
  $scope.comentarios = [
    {
      comentario: "Buen tutorial",
      username:"Macs"
    },
    {
        comentario:"Malisimo tutorial",
        username:"Otro"
    }
  ];
  $scope.agregarComentario=function(){
      $scope.comentarios.push($scope.nuevoComentario)
  }
});
