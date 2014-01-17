'use strict';

angular.module('angularTemplatesApp')
  .controller('RandomCtrl', function ($scope, $routeParams, Songs) {
    if (void 0 != $routeParams.aid) {
      $scope.albumSongs = {};
      $scope.albumSongs[$routeParams.aid] = Songs.data.songs[$routeParams.aid];
    }
    else {
      $scope.albumSongs = Songs.data.songs;
    }
  }).directive('musicPlayer', function($rootScope){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        //scope.file = 'audio/' + $rootScope.selectedSong;
        $rootScope.player = elem.find("audio")[0];
      },
      scope: {
        filePath: '='
      },
      template: '<audio controls>' +
       '<source src="{{ file }}" type="audio/mpeg">' +
       'Your browser does not support the audio element.' +
                  '</audio>'
    };
  }).filter('linear', function() {
  return function(value) {
    var result = {};
    for(var key in value) {
      for(var i=0, ln = value[key].length; i < ln; i++ ) {
        result[key+'_'+i] = value[key][i];
        result[key+'_'+i]["id"] = key;
      }      
    }
    return result;
  };
});
      