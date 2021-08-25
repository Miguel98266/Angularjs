angular.module("MyFirsApp", []).controller("mainCtrl", function ($scope,$http) {
  $http({
    method: "GET",
    url: "http://localhost:53303/api/Users",
  }).then(
    function (response) {
      $scope.data = response.data;
      $scope.chart = new d3.OrgChart()
        .container(".chart-container")
        .data($scope.data)
        .nodeWidth((d) => 250)
        .nodeHeight((d) => 175)
        .childrenMargin((d) => 40)
        .compactMarginBetween((d) => 15)
        .compactMarginPair((d) => 80)
        .nodeContent(function (d, i, arr, state) {
          return `
        <div style="padding-top:30px;background-color:none;margin-left:1px;height:${
          d.height
        }px;border-radius:2px;overflow:visible">
          <div style="height:${
            d.height - 32
          }px;padding-top:0px;background-color:white;border:1px solid lightgray;">


           <div style="margin-right:10px;margin-top:15px;float:right">${
             d.data.id
           }</div>
           
           <div style="margin-top:-10px;background-color:#3AB6E3;height:10px;width:${
             d.width - 2
           }px;border-radius:1px"></div>

           <div style="padding:20px; padding-top:30px;text-align:center">
               <div style="color:#111672;font-size:16px;font-weight:bold"> ${
                 d.data.Name
               } </div>
               <div style="color:#404040;font-size:16px;margin-top:4px"> ${
                 d.data.PositionName
               } </div>
           </div> 
           <div style="display:flex;padding-left:15px;padding-right:15px;">
             <div > Gestiona:  ${d.data._directSubordinates} 👤</div>  
             <div > Supervisa: ${d.data._totalSubordinates} 👤</div>    
           </div>
          </div>     
  </div>
`;
        })
        .render();
    },
    function (error) {}
  );

  /*$scope.chart = new d3.OrgChart()
    .container(".chart-container")
    .data($scope.data)
    .nodeWidth((d) => 250)
    .nodeHeight((d) => 175)
    .childrenMargin((d) => 40)
    .compactMarginBetween((d) => 15)
    .compactMarginPair((d) => 80)
    .nodeContent(function (d, i, arr, state) {
      return `
        <div style="padding-top:30px;background-color:none;margin-left:1px;height:${
          d.height
        }px;border-radius:2px;overflow:visible">
          <div style="height:${
            d.height - 32
          }px;padding-top:0px;background-color:white;border:1px solid lightgray;">


           <div style="margin-right:10px;margin-top:15px;float:right">${
             d.data.id
           }</div>
           
           <div style="margin-top:-10px;background-color:#3AB6E3;height:10px;width:${
             d.width - 2
           }px;border-radius:1px"></div>

           <div style="padding:20px; padding-top:30px;text-align:center">
               <div style="color:#111672;font-size:16px;font-weight:bold"> ${
                 d.data.name
               } </div>
               <div style="color:#404040;font-size:16px;margin-top:4px"> ${
                 d.data.positionName
               } </div>
           </div> 
           <div style="display:flex;padding-left:15px;padding-right:15px;">
             <div > Gestiona:  ${d.data._directSubordinates} 👤</div>  
             <div > Supervisa: ${d.data._totalSubordinates} 👤</div>    
           </div>
          </div>     
  </div>
`;
    })
    .render();*/
});
