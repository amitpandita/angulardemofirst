'use strict';

angular.module('angularTemplatesApp', ['ui',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]).run(function($rootScope, Songs) {
  if (void 0 === Songs.data || void 0 === Songs.data.songs) {
    Songs.getSongs();
  }
  $rootScope.songs = Songs;
  $rootScope.playSong = function(song,aid){
    $rootScope.selectedSong = song;
   // console.log(aid);
    $rootScope.selectedSong.album = Songs.data.albums[aid];

    if(song.file.substr(0,4)==='http')
      {
        //$rootScope.player.src = 'audio/' + song.file;
      $rootScope.player.src = song.file;
    } else{
      $rootScope.player.src = 'audio/' + song.file;
    }
    $rootScope.player.play();
  };

}).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/song', {
        templateUrl: 'views/songlist.html',
        controller: 'SongListCtrl'
      })
      .when('/random', {
        templateUrl: 'views/random.html',
        controller: 'RandomCtrl'
      })
      .when('/random/:aid', {
        templateUrl: 'views/random.html',
        controller: 'RandomCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
