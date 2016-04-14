angular.module("app",[]);
angular.module("app").config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
});
angular.module("app").run(function () {
    console.log("Running");
})
angular.module("app").controller("test",function ($scope) {
    $scope.test = "Hello";
    console.log("Running");
})