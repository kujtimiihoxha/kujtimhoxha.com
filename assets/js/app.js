angular.module("app",[ ]).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
}).run(function () {
    console.log("Running");
}).controller("test",function ($scope) {
    $scope.test = "Hello";
    console.log("Running");
});