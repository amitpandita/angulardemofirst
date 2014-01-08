'use strict';

angular.module('angularTemplatesApp').filter('startFrom', function() {
		return function(input, start) {
			start = +start; //parse to int
			return input.slice(start);
		};
	})
	
	.controller('RandomCtrl', function ($scope, $http, $rootScope) {
		$scope.currentTrack = 0;
		$scope.pageSize = 5;
		$scope.data=[];

		var updateTrack = function(){
			$rootScope.$broadcast('audio.set', 'audio/' + $scope.data[$scope.currentTrack].file, $scope.data[$scope.currentTrack], $scope.currentTrack, $scope.data.length);
		};

		$rootScope.$on('audio.next', function(){
			$scope.currentTrack++;
			if ($scope.currentTrack < $scope.data.length){
				updateTrack();
			}else{
				$scope.currentTrack=$scope.data.length-1;
			}
		});

		$rootScope.$on('audio.prev', function(){
			$scope.currentTrack--;
			if ($scope.currentTrack >= 0){
				updateTrack();
			}else{
				$scope.currentTrack = 0;
			}
		});

		$http.get('data/songList.json')
			.success(function(response){
				$scope.data = response;
				console.log($scope.data);
				updateTrack();
			});
	})
  .controller('MainCtrl', function () {
    // $scope.filterOptions = {
    //   filterText: '',
    //   useExternalFilter: true
    // };
    // $scope.totalServerItems = 0;
    // $scope.pagingOptions = {
    //   pageSizes: [5, 10, 20],
    //   pageSize: 5,
    //   currentPage: 1
    // };
    // $scope.setPagingData = function(data, page, pageSize) {
    //   console.log(data);
    //   var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
    //   $scope.myData = pagedData;
    //   $scope.totalServerItems = data.length;
    //   if (!$scope.$$phase) {
    //     $scope.$apply();
    //   }
    // };
    // $scope.getPagedDataAsync = function(pageSize, page, searchText) {
    //   setTimeout(function() {
    //     var data;
    //     if (searchText) {
    //       var ft = searchText.toLowerCase();
    //       $http.get('scripts/largeLoad.json').success(function(largeLoad) {
    //         data = largeLoad.filter(function(item) {
    //           return JSON.stringify(item).toLowerCase().indexOf(ft) !== -1;
    //         });
    //         $scope.setPagingData(data, page, pageSize);
    //       });
    //     } else {
    //       $http.get('scripts/largeLoad.json').success(function(largeLoad) {
    //         $scope.setPagingData(largeLoad, page, pageSize);
    //       });
    //     }
    //   }, 100);
    // };

    // $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

    // $scope.$watch('pagingOptions', function(newVal, oldVal) {
    //   if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
    //     $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
    //   }
    // }, true);
    // $scope.$watch('filterOptions', function(newVal, oldVal) {
    //   if (newVal !== oldVal) {
    //     $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
    //   }
    // }, true);

    // $scope.gridOptions = {
    //   data: 'myData',
    //   enablePaging: true,
    //   showFooter: true,
    //   totalServerItems: 'totalServerItems',
    //   pagingOptions: $scope.pagingOptions,
    //   filterOptions: $scope.filterOptions
    // };
}).controller('SongListCtrl', function ($scope) {
    $scope.songlist = [{
      'songs': 'Gandi Baat',
      'artists': 'Mika Singh',
      'popularity':[1,1,1,0,0]
    },
    {
      'songs': 'Saree Ke Fall',
      'artists': 'Arijit Singh',
      'popularity':[1,1,1,0,0]
    },
    {
      'songs': 'Malang',
      'artists': 'Shilpa Rao',
      'popularity':[1,1,1,1,0]
    }
  ];
  });