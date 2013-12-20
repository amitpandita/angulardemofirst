'use strict';

angular.module('bootstrappingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }).controller('bootstrappingCntl1', function ($scope) {
    var exprs = $scope.exprs = [];
    $scope.expr = '67+35*2-56';
    $scope.addExp = function(expr) {
		exprs.push(expr);
    };
     
    $scope.removeExp = function(index) {
		exprs.splice(index, 1);
    };
 });

