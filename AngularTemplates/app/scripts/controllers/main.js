'use strict';

angular.module('angularTemplatesApp').controller('MainCtrl', function () {
    
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