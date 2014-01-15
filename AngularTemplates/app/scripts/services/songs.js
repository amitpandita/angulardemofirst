'use strict';

angular.module('angularTemplatesApp')
  .service('Songs', function Songs($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var songService = {};

    songService.data = {};

    //Gets the list of nuclear weapons
    songService.getSongs = function() {
      $http.get('data/songList.json')
            .success(function(data) {
              songService.data = data;
              console.log(songService);
            });
    };

    return songService;
  });
