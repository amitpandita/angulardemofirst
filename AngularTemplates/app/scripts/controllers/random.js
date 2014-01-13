'use strict';

angular.module('angularTemplatesApp')
  .controller('RandomCtrl', function ($scope, $http, Songs) {
    Songs.getSongs();
    $scope.songs = Songs;
    console.log(Songs);
  }).directive('musicPlayer', function(){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        scope.file = 'audio/' + scope.filePath;
      },
      scope: {
        filePath: '='
      },
      template: '<audio controls>' +
       '<source src="{{ file }}" type="audio/mpeg">' +
       'Your browser does not support the audio element.' +
                  '</audio>'
    };
  });
      