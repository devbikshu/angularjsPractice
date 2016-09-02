//isolating the scope of directive

angular.module("directivesExample")
.controller('dirCtrl', ['$scope', function($scope) {
  $scope.owner = {
    name: 'Arjun',
    address: 'Hyderabad'
  };
    $scope.customer = {
    name: 'Nani',
    address: 'Chennai'
  };
}])
.directive('myCustomer', function() {
  return {
      scope:{
      "customers":"=info"
  },
      restrict:'EC',
    templateUrl: "../templates/directivesTmpl/customer-iso.html"
  };
});