angular.module("todoListApp", [])
.controller("mainCtrl", function($scope, dataService){
  $scope.helloConsole = dataService.helloConsole;
  $scope.learningNgChange = function(){
    console.log("an input changed");
  };
  $scope.todos = [
      {"name": "clean the house"},
      {"name": "water the dog"},
      {"name": "feed the lawn"},
      {"name": "pay dem bills"},
      {"name": "run"},
      {"name": "swim"}
  ]
})
.service('dataService', function(){
  // this is used in service only, this refers to dataService
  this.helloConsole = function(){
    console.log('this is the helloConsole service');
  }
});
