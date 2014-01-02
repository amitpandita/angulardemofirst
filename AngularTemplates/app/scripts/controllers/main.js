'use strict';

angular.module('angularTemplatesApp')
  .controller('MainCtrl', function ($scope, $http) {
    
    $scope.filterOptions = {
    filterText: "",
    useExternalFilter: true
  };
  $scope.totalServerItems = 0;
  $scope.pagingOptions = {
    pageSizes: [5, 10, 20],
    pageSize: 5,
    currentPage: 1
  };
  $scope.setPagingData = function(data, page, pageSize) {
    var pagedData = data.splice((page - 1) * pageSize, page * pageSize);
    $scope.myData = pagedData;
    $scope.totalServerItems = data.length;
    if (!$scope.$$phase) {
      $scope.$apply();
    }
  };
  $scope.getPagedDataAsync = function(pageSize, page, searchText) {
    setTimeout(function() {
      var data;
      if (searchText) {
        var ft = searchText.toLowerCase();
        $http.get('scripts/data.json').success(function(songlist) {
          data = songlist.filter(function(item) {
            return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
          });
          $scope.setPagingData(data, page, pageSize);
        });
      } else {
        $http.get('scripts/data.json').success(function(songlist) {
          $scope.setPagingData(songlist, page, pageSize);
        });
      }
    }, 100);
  };

  $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

  $scope.$watch('pagingOptions', function(newVal, oldVal) {
    if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
      $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
    }
  }, true);
  $scope.$watch('filterOptions', function(newVal, oldVal) {
    if (newVal !== oldVal) {
      $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
    }
  }, true);

  $scope.gridOptions = {
    data: 'myData',
    enablePaging: true,
    showFooter: true,
    totalServerItems: 'totalServerItems',
    pagingOptions: $scope.pagingOptions,
    filterOptions: $scope.filterOptions
  };
  }).controller('SongListCtrl', function ($scope) {
$scope.songlist = [
{'songs': 'Gandi Baat',
'artists': 'Mika Singh',
'popularity':[1,1,1,0,0]},
{'songs': 'Saree Ke Fall',
'artists': 'Arijit Singh',
'popularity':[1,1,1,0,0]},
{'songs': 'Malang',
'artists': 'Shilpa Rao',
'popularity':[1,1,1,1,0]}
];
});


