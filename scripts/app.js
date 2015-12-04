angular.module("todoListApp", [])
.controller("mainCtrl", function($scope){
  $scope.helloWorld = function(){
    console.log("Hello there! This is the helloWorld controller function, in the mainCtrl");
  };
})

.controller('coolCtrl', function($scope){
  $scope.whoAmI = function(){
    console.log("hello there, this is the cool controller");
  };

  $scope.helloWorld = function(){
    console.log('this is not the main controller');
  };
})

.controller('imASibling',function($scope){
  $scope.foobar = 1234;
  // do other cool stuff!
});
