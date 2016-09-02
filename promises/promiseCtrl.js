angular.module("promiseExamples")
    .controller("promiseCtrl", ["$scope", "$rootScope", "productSvc", function ($scope,$rootScope,productSvc) {
        $scope.addToCart = function(item){
            productSvc.addToCart(item);
        }
    productSvc.getDataFromApi()
        .then(function (response) {
        $scope.products = response;
    }).catch(function (response) {
        $scope.error = response;
    })
}]);