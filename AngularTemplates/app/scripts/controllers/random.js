'use strict';

angular.module('angularTemplatesApp')
  .controller('RandomCtrl', function ($scope) {
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
  }).filter('linear', function() {
  return function(value) {
    var result = {};
    for(var key in value) {
      for(var i=0, ln = value[key].length; i < ln; i++ ) {
        result[key+'_'+i] = value[key][i];
      }      
    }
    return result;
  };
});
      