angular.module("product")
.service("productSvc", ["$http", "$q", function($http,$q){
    var cartList = [];
    this.addToCart = function(item){
        cartList.push(item);
        
    }
    this.getCart = function(){
        return cartList;
    }
    this.getDataFromApi = function(){
         //Step 1.
            var dfd = $q.defer();

            $http.get("data/products.json")
                .then(function (response) {
                    dfd.resolve(response.data.products);
                })
                .catch(function (response) {
                    dfd.reject("Error Occurred");
                });
            //step 2.
            return dfd.promise;
    }
}]);