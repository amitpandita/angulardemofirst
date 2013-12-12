var cartApp = angular.module("cartApp",[]);
cartApp.controller("ItemController",function($scope) {
    var itemDetails = {
        name: "",
        type: "",
        qnt: "",
        price: ""
    };
    $scope.deepCopy = function(obj) {
        return {
            name: obj.name,
            type: obj.type,
            qnt: obj.qnt,
            price: obj.price
        };
    }
    $scope.item = $scope.deepCopy(itemDetails);
    $scope.items = [
        {
            name: "Sweatshirt",
            type: "Apparel",
            qnt: 2,
            price: 800
        },
        {
            name: "Hat",
            type: "Apparel",
            qnt: 4,
            price: 2000
        },
        {
            name: "Coffee Mugs",
            type: "Crockery",
            qnt: 3,
            price: 240
        }
    ];
    $scope.index = -1;
    $scope.isAdd = true;
    $scope.editItem = function(index) {
        $scope.index = index;
        $scope.isAdd = false;
        $scope.item = $scope.deepCopy($scope.items[index]);
    };
    $scope.delItem = function(index) {
        $scope.items.splice(index,1);
    };
    $scope.addItem = function() {
        $scope.items.push($scope.deepCopy($scope.item));
        $scope.reset();
    };
    $scope.updateItem = function() {
        $scope.items[$scope.index] = $scope.deepCopy($scope.item);
        $scope.reset();
    };
    $scope.reset = function() {
        $scope.item = $scope.deepCopy(itemDetails);
        $scope.index = -1;
        $scope.isAdd = true;
        $scope.form.$setPristine();

    };
});
