var cartApp = angular.module("cartApp",[]);
cartApp.controller("ItemController",function($scope) {
    var itemDetails = {
        name: "",
        type: "",
        qnt: "",
        price: ""
    };
    $scope.item = itemDetails;
    $scope.items = [
        {
            name: "XYZ",
            type: "AAA",
            qnt: 1,
            price: 123
        },
        {
            name: "XYZ",
            type: "AAA",
            qnt: 1,
            price: 123
        },
        {
            name: "XYZ",
            type: "AAA",
            qnt: 1,
            price: 123
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
        $scope.item = itemDetails;
        $scope.index = -1;
        $scope.isAdd = true;
    };
    $scope.deepCopy = function(obj) {
        return {
            name: obj.name,
            type: obj.type,
            qnt: obj.qnt,
            price: obj.price
        };
    }
});
