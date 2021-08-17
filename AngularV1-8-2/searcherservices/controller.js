angular
  .module("MyFirsApp", [])
  .service("ToDoService", function () {
    this.search = function () {
      d3.selectAll(".user-search-box")
        .transition()
        .duration(250)
        .style("width", "350px");
    };
    this.getAll = function (selector) {
      return document.querySelectorAll(selector);
    };
    this.clearResult = function () {
      set(".result-list", '<div class="buffer" ></div>');
      set(".user-search-box .result-header", "Resultados");
    };
  })
  .controller("mainCtrl", function ($scope, ToDoService) {
    $scope.data = [
      {
        name: "Ian Devling",
        area: "Corporate",
        positionName: "Chief Executive Officer",
        id: "O-6066",
        parentId: "",
      },
      {
        name: "Davolio Nancy",
        area: "Corporate",
        positionName: "CTO",
        id: "O-6067",
        parentId: "O-6066",
      },
      {
        name: "Leverling Janet",

        area: "Corporate",

        office: "CEO office",

        positionName: "CTO",
        id: "O-6068",
        parentId: "O-6066",
      },
      {
        name: "Leverling Janet",
        area: "Corporate",
        positionName: "CTO",
        id: "O-6069",
        parentId: "O-6066",
      },
      {
        name: "Leverling Janet",
        area: "Corporate",
        positionName: "CTO",
        id: "O-6070",
        parentId: "O-6066",
      },
      {
        name: "Leverling Janet",
        area: "Corporate",
        office: "CEO office",
        positionName: "CTO",
        id: "O-6071",
        parentId: "O-6067",
      },
      {
        name: "Fuller Andrew",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Linear Manager",
        id: "O-6072",
        parentId: "O-6067",
        size: "",
      },
      {
        name: "Peacock Margaret",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "CEO",
        id: "O-6073",
        parentId: "O-6067",
        size: "",
      },
      {
        name: "Buchanan Steven",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Head of direction",
        id: "O-6074",
        parentId: "O-6067",
        size: "",
      },
      {
        name: "Suyama Michael",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior sales manager",
        id: "O-6075",
        parentId: "O-6067",
        size: "",
      },
      {
        name: "King Robert",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior Sales Manager",
        id: "O-6076",
        parentId: "O-6067",
        size: "",
      },
      {
        name: "West Adam",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "CTO",
        id: "O-6077",
        parentId: "O-6067",
        size: "",
      },
      {
        name: "Charlotte Cooper",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior Trader",
        id: "O-6078",
        parentId: "O-6067",
        size: "",
      },
      {
        name: "Yoshi Nagase",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Head of laboratory",
        id: "O-6079",
        parentId: "O-6067",
        size: "",
      },
      {
        name: "Peter Wilson",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Head of channels",
        id: "O-6080",
        parentId: "O-6068",
        size: "",
      },
      {
        name: "Carlos Diaz",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior Android Developer",
        id: "O-6081",
        parentId: "O-6068",
        size: "",
      },
      {
        name: "Sven Petersen",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior Developer",
        id: "O-6082",
        parentId: "O-6068",
        size: "",
      },
      {
        name: "Peter Wilson",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Head of channels",
        id: "O-6083",
        parentId: "O-6069",
        size: "",
      },
      {
        name: "Carlos Diaz",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior Android Developer",
        id: "O-6084",
        parentId: "O-6069",
        size: "",
      },
      {
        name: "Sven Petersen",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior Developer",
        id: "O-6085",
        parentId: "O-6069",
        size: "",
      },
      {
        name: "Peter Wilson",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Head of channels",
        id: "O-6086",
        parentId: "O-6070",
        size: "",
      },
      {
        name: "Carlos Diaz",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior Android Developer",
        id: "O-6087",
        parentId: "O-6070",
        size: "",
      },
      {
        name: "Sven Petersen",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior Developer",
        id: "O-6088",
        parentId: "O-6070",
        size: "",
      },
      {
        name: "Leverling Janet",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "CTO",
        id: "O-6089",
        parentId: "O-6071",
        size: "",
      },
      {
        name: "Fuller Andrew",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Linear Manager",
        id: "O-6090",
        parentId: "O-6071",
        size: "",
      },
      {
        name: "Peacock Margaret",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "CEO",
        id: "O-6091",
        parentId: "O-6071",
        size: "",
      },
      {
        name: "Buchanan Steven",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Head of direction",
        id: "O-6092",
        parentId: "O-6071",
        size: "",
      },
      {
        name: "Suyama Michael",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior sales manager",
        id: "O-6093",
        parentId: "O-6071",
        size: "",
      },
      {
        name: "King Robert",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior Sales Manager",
        id: "O-6094",
        parentId: "O-6071",
        size: "",
      },
      {
        name: "West Adam",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "CTO",
        id: "O-6095",
        parentId: "O-6071",
        size: "",
      },
      {
        name: "Charlotte Cooper",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior Trader",
        id: "O-6096",
        parentId: "O-6071",
        size: "",
      },
      {
        name: "Yoshi Nagase",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Head of laboratory",
        id: "O-6097",
        parentId: "O-6071",
        size: "",
      },
      {
        name: "Leverling Janet",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "CTO",
        id: "O-6098",
        parentId: "O-6072",
        size: "",
      },
      {
        name: "Fuller Andrew",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Linear Manager",
        id: "O-6099",
        parentId: "O-6072",
        size: "",
      },
      {
        name: "Peacock Margaret",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "CEO",
        id: "O-6100",
        parentId: "O-6072",
        size: "",
      },
      {
        name: "Buchanan Steven",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Head of direction",
        id: "O-6101",
        parentId: "O-6072",
        size: "",
      },
      {
        name: "Suyama Michael",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior sales manager",
        id: "O-6102",
        parentId: "O-6072",
        size: "",
      },
      {
        name: "King Robert",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior Sales Manager",
        id: "O-6103",
        parentId: "O-6072",
        size: "",
      },
      {
        name: "West Adam",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "CTO",
        id: "O-6104",
        parentId: "O-6072",
        size: "",
      },
      {
        name: "Charlotte Cooper",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior Trader",
        id: "O-6105",
        parentId: "O-6072",
        size: "",
      },
      {
        name: "Yoshi Nagase",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Head of laboratory",
        id: "O-6106",
        parentId: "O-6072",
        size: "",
      },
      {
        name: "Leverling Janet",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "CTO",
        id: "O-6107",
        parentId: "O-6073",
        size: "",
      },
      {
        name: "Fuller Andrew",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Linear Manager",
        id: "O-6108",
        parentId: "O-6073",
        size: "",
      },
      {
        name: "Peacock Margaret",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "CEO",
        id: "O-6109",
        parentId: "O-6073",
        size: "",
      },
      {
        name: "Buchanan Steven",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Head of direction",
        id: "O-6110",
        parentId: "O-6073",
        size: "",
      },
      {
        name: "Suyama Michael",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior sales manager",
        id: "O-6111",
        parentId: "O-6073",
        size: "",
      },
      {
        name: "King Robert",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior Sales Manager",
        id: "O-6112",
        parentId: "O-6073",
        size: "",
      },
      {
        name: "West Adam",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "CTO",
        id: "O-6113",
        parentId: "O-6073",
        size: "",
      },
      {
        name: "Charlotte Cooper",
        imageUrl:
          "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        area: "Corporate",
        profileUrl: "http://example.com/employee/profile",
        office: "CEO office",
        tags: "Ceo,tag1, tag2",
        isLoggedUser: false,
        positionName: "Senior Trader",
        id: "O-6114",
        parentId: "O-6073",
        size: "",
      },
    ];
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
      .render();
    $scope.org = ToDoService.getAll();
    $scope.search = function () {
      $scope.org = ToDoService.search();
    };
    $scope.back = function () {
      $scope.org = ToDoService.back();
    };
    $scope.closeSearchBox = function () {
      ToDoService.closeSearchBox();
    };
  });
