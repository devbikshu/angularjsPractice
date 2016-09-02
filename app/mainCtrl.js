angular.module("testApp")
.controller("mainCtrl", ["$scope", function($scope){
    $scope.navBarTemplate="../templates/navbar/navbar.tpl.html";
    $scope.homePageTemplate="../templates/home/home.tpl.html";
    $scope.loadPage = function(paytype){
        if(paytype == 'cart'){
            $scope.homePageTemplate="../cart/cart.tpl.html";
        }
    }
}]);