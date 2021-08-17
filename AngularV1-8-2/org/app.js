angular
  .module("MyFirsApp", [])
  .controller("mainCtrl", function AppCtrl($scope) {
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
       function reflectResults(results) {
                var htmlStringArray = results.map(function (result) {
                    var strVar = "";
                    strVar += "         <div class=\"list-item\">";
                    strVar += "          <a >";
                    strVar += "            <div class=\"image-wrapper\">";
                    strVar += "              <img class=\"image\" src=\"" + result.imageUrl + "\"\/>";
                    strVar += "            <\/div>";
                    strVar += "            <div class=\"description\">";
                    strVar += "              <p class=\"name\">" + result.name + "<\/p>";
                    strVar += "               <p class=\"position-name\">" + result.positionName + "<\/p>";
                    strVar += "               <p class=\"area\">" + result.area + "<\/p>";
                    strVar += "            <\/div>";
                    strVar += "            <div class=\"buttons\">";
                    strVar += "              <a target='_blank' href='" + result.profileUrl + "'><button class='btn-search-box btn-action'>View Profile<\/button><\/a>";
                    strVar += "              <button class='btn-search-box btn-action btn-locate' onclick='params.funcs.locate(" + result.uniqueIdentifier + ")'>Locate <\/button>";
                    strVar += "            <\/div>";
                    strVar += "          <\/a>";
                    strVar += "        <\/div>";

                    return strVar;

                })

                var htmlString = htmlStringArray.join('');
                params.funcs.clearResult();

                var parentElement = get('.result-list');
                var old = parentElement.innerHTML;
                var newElement = htmlString + old;
                parentElement.innerHTML = newElement;
                set('.user-search-box .result-header', "RESULT - " + htmlStringArray.length);

            }

            function clearResult() {
                set('.result-list', '<div class="buffer" ></div>');
                set('.user-search-box .result-header', "RESULT");

            }

            function listen() {
                var input = get('.user-search-box .search-input');

                input.addEventListener('input', function () {
                    var value = input.value ? input.value.trim() : '';
                    if (value.length < 3) {
                        params.funcs.clearResult();
                    } else {
                        var searchResult = params.funcs.findInTree(params.data, value);
                        params.funcs.reflectResults(searchResult);
                    }

                });
            }

            $scope.search = function searchUsers() {

                d3.selectAll('.user-search-box')
                    .transition()
                    .duration(250)
                    .style('width', '350px')
            }
            

            function closeSearchBox() {
                d3.selectAll('.user-search-box')
                    .transition()
                    .duration(250)
                    .style('width', '0px')
                    .each("end", function () {
                        params.funcs.clearResult();
                        clear('.search-input');
                    });

            }

            function findInTree(rootElement, searchText) {
                var result = [];
                // use regex to achieve case insensitive search and avoid string creation using toLowerCase method
                var regexSearchWord = new RegExp(searchText, "i");

                recursivelyFindIn(rootElement, searchText);

                return result;}
  });
